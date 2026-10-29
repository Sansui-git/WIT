import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig, phoneDisplay } from "@/lib/site";
import {
  calculatePrice,
  formatPrice,
  quoteQuestions,
  summarizeAnswers,
  type QuoteAnswers,
} from "@/lib/quote";

/**
 * Instant quote endpoint. Same email setup as /api/consultation
 * (RESEND_API_KEY, LEAD_TO_EMAIL, LEAD_FROM_EMAIL). Sends two emails: the lead
 * to the business, and the estimate to the customer. Without a key, the quote
 * is logged on the server and the request still succeeds.
 *
 * Nothing is signed online. The price is recalculated here from the answers;
 * the client's price is never trusted.
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const LEAD_TO_EMAIL = process.env.LEAD_TO_EMAIL || siteConfig.email;
const LEAD_FROM_EMAIL =
  process.env.LEAD_FROM_EMAIL || `${siteConfig.companyName} <onboarding@resend.dev>`;

const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const str = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, 200) : "");

function table(rows: string[][]) {
  return `<table style="width:100%;border-collapse:collapse">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;background:#f5efe6;border:1px solid #ddd2c0;font-weight:bold;vertical-align:top">${esc(k)}</td><td style="padding:8px 12px;border:1px solid #ddd2c0">${esc(v)}</td></tr>`
    )
    .join("")}</table>`;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without processing.
  if (str(body.company)) return NextResponse.json({ ok: true });

  const name = str(body.name);
  const email = str(body.email);
  const phone = str(body.phone);
  const town = str(body.town);
  const who = str(body.who);
  const time = str(body.time);

  if (!name || !town || phone.replace(/\D/g, "").length < 7 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, phone, email and town." },
      { status: 400 }
    );
  }
  if (!body.consent) {
    return NextResponse.json(
      { ok: false, error: "Please tick the box so we can send your quote." },
      { status: 400 }
    );
  }

  // Keep only known question ids / option values.
  const raw = (body.answers ?? {}) as Record<string, unknown>;
  const answers: QuoteAnswers = {};
  for (const q of quoteQuestions) {
    const vals = Array.isArray(raw[q.id]) ? (raw[q.id] as unknown[]) : [];
    answers[q.id] = q.options.map((o) => o.value).filter((v) => vals.includes(v));
    if (answers[q.id].length === 0) {
      return NextResponse.json({ ok: false, error: "Please answer every question." }, { status: 400 });
    }
  }

  const price = formatPrice(calculatePrice(answers));
  const sentAt = new Date().toLocaleString("en-CA", { timeZone: "America/Edmonton" });
  const answerRows = summarizeAnswers(answers).map((a) => [a.question, a.answer]);

  const leadRows = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email],
    ["Town", town],
    ["For", who || "—"],
    ["Best time to call", time || "—"],
    ["Estimate shown", price],
    ["Sent", `${sentAt} (Mountain Time)`],
    ...answerRows,
  ];
  const leadText =
    "New instant quote. Call to book the free in-home visit.\n\n" +
    leadRows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const leadHtml = `<div style="font-family:Arial,sans-serif;color:#22303f;max-width:560px">
    <h2 style="color:#1f3a5f">New instant quote — ${esc(name)}</h2>
    <p>Call to book the free in-home visit.</p>
    ${table(leadRows)}
  </div>`;

  const customerText = [
    `Hi ${name},`,
    "",
    `Thank you for using our instant quote. Your estimate is ${price}.`,
    "This estimate is based on your answers. Your price is confirmed at your free in-home visit.",
    "",
    "Next step: we will call you to book your free in-home visit. We measure your bathroom, go over your options and funding, and review all of the paperwork with you. There is no obligation.",
    "",
    `Prefer to book now? Call us at ${phoneDisplay}.`,
    "",
    "Your answers:",
    ...answerRows.map(([k, v]) => `${k}: ${v}`),
    "",
    siteConfig.companyName,
  ].join("\n");
  const customerHtml = `<div style="font-family:Arial,sans-serif;color:#22303f;max-width:560px">
    <h2 style="color:#1f3a5f">Your walk-in tub estimate: ${esc(price)}</h2>
    <p>Hi ${esc(name)}, thank you for using our instant quote. This estimate is based on your answers. Your price is confirmed at your free in-home visit.</p>
    <h3 style="color:#1f3a5f">Next step: your free in-home visit</h3>
    <p>We will call you to book a time. We measure your bathroom, go over your options and funding, and review all of the paperwork with you. There is no obligation.</p>
    <p><strong>Prefer to book now? Call ${esc(phoneDisplay)}.</strong></p>
    <h3 style="color:#1f3a5f">Your answers</h3>
    ${table(answerRows)}
    <p style="margin-top:16px">${esc(siteConfig.companyName)}</p>
  </div>`;

  if (!RESEND_API_KEY) {
    console.info("[quote] RESEND_API_KEY not set — quote logged:\n" + leadText);
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(RESEND_API_KEY);
  const lead = await resend.emails.send({
    from: LEAD_FROM_EMAIL,
    to: LEAD_TO_EMAIL,
    replyTo: email,
    subject: `New instant quote — ${name} (${town})`,
    text: leadText,
    html: leadHtml,
  });
  if (lead.error) {
    console.error("[quote] lead email failed:", lead.error, "\n" + leadText);
    return NextResponse.json(
      { ok: false, error: `Could not send your quote. Please try again or call ${phoneDisplay}.` },
      { status: 500 }
    );
  }

  // The business already has the lead, so a failed customer copy is logged, not shown.
  const copy = await resend.emails.send({
    from: LEAD_FROM_EMAIL,
    to: email,
    replyTo: LEAD_TO_EMAIL,
    subject: `Your walk-in tub estimate from ${siteConfig.companyName}`,
    text: customerText,
    html: customerHtml,
  });
  if (copy.error) console.error("[quote] customer copy failed:", copy.error);

  return NextResponse.json({ ok: true });
}
