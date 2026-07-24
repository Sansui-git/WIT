import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

/**
 * Consultation request endpoint.
 *
 * Validates the submission server-side and emails the lead to your business
 * inbox using Resend (https://resend.com).
 *
 * ---------------------------------------------------------------------------
 *  SETUP (one time):
 *   1. Create a free account at https://resend.com and create an API key.
 *   2. Add these environment variables (in Vercel: Settings → Environment
 *      Variables — or in a local .env.local file):
 *
 *        RESEND_API_KEY   = your Resend API key            (required to send)
 *        LEAD_TO_EMAIL    = where leads should arrive       (optional;
 *                           defaults to the business email in lib/site.ts)
 *        LEAD_FROM_EMAIL  = the "from" address              (optional;
 *                           defaults to Resend's test sender)
 *
 *   3. IMPORTANT — the "from" address:
 *      - To send to any inbox in production, verify your domain in Resend
 *        (Resend → Domains) and set LEAD_FROM_EMAIL to something on it,
 *        e.g. "Website <website@yourdomain.ca>".
 *      - Before you verify a domain, Resend's test sender
 *        "onboarding@resend.dev" only delivers to the email address that owns
 *        the Resend account. That's fine for a first test.
 *
 *  If RESEND_API_KEY is not set, the endpoint still accepts submissions and
 *  logs them to the server (so nothing is lost), and returns success — this
 *  keeps the form working before email is configured.
 * ---------------------------------------------------------------------------
 */

interface Lead {
  name: string;
  phone?: string;
  email?: string;
  postal?: string;
  who?: string;
  time?: string;
  message?: string;
}

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const LEAD_TO_EMAIL = process.env.LEAD_TO_EMAIL || siteConfig.email;
const LEAD_FROM_EMAIL =
  process.env.LEAD_FROM_EMAIL ||
  `${siteConfig.companyName} <onboarding@resend.dev>`;

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmail(lead: Lead): { subject: string; text: string; html: string } {
  const rows: [string, string | undefined][] = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["Postal code", lead.postal],
    ["Who it's for", lead.who],
    ["Best time to reach", lead.time],
    ["Message", lead.message],
  ];
  const present = rows.filter(([, v]) => v && v.length > 0) as [string, string][];

  const subject = `New consultation request — ${lead.name}`;

  const text = present.map(([k, v]) => `${k}: ${v}`).join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #22303f; max-width: 560px;">
      <h2 style="color: #1f3a5f; margin: 0 0 4px;">New consultation request</h2>
      <p style="color: #46586a; margin: 0 0 16px;">
        Submitted through ${escapeHtml(siteConfig.companyName)} website.
      </p>
      <table style="width: 100%; border-collapse: collapse;">
        ${present
          .map(
            ([k, v]) => `
          <tr>
            <td style="padding: 8px 12px; background: #f5efe6; border: 1px solid #ddd2c0; font-weight: bold; white-space: nowrap; vertical-align: top;">${escapeHtml(
              k
            )}</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd2c0;">${escapeHtml(
              v
            ).replace(/\n/g, "<br>")}</td>
          </tr>`
          )
          .join("")}
      </table>
      <p style="color: #46586a; font-size: 13px; margin-top: 16px;">
        Reply directly to this email to respond${
          lead.email ? ` to ${escapeHtml(lead.email)}` : ""
        }.
      </p>
    </div>`;

  return { subject, text, html };
}

async function deliverLead(lead: Lead): Promise<void> {
  // No key configured yet: log so the lead isn't lost, and succeed.
  if (!RESEND_API_KEY) {
    console.info(
      `[consultation-request] RESEND_API_KEY not set — logging lead for ${siteConfig.companyName}:`,
      JSON.stringify(lead)
    );
    return;
  }

  const resend = new Resend(RESEND_API_KEY);
  const { subject, text, html } = buildEmail(lead);

  const { error } = await resend.emails.send({
    from: LEAD_FROM_EMAIL,
    to: [LEAD_TO_EMAIL],
    subject,
    text,
    html,
    // Let the business reply straight to the customer when an email is given.
    ...(lead.email ? { replyTo: lead.email } : {}),
  });

  if (error) {
    throw new Error(error.message || "Resend send failed");
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without processing.
  if (typeof body.company === "string" && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const postal = typeof body.postal === "string" ? body.postal.trim() : "";
  const consent = body.consent;

  const errors: string[] = [];
  if (!name) errors.push("name");
  if (!phone || phone.replace(/[^0-9]/g, "").length < 7) errors.push("phone");
  if (!email || !isEmail(email)) errors.push("email");
  if (postal && !/^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/.test(postal)) {
    errors.push("postal");
  }
  if (!consent || consent === "false") errors.push("consent");

  if (errors.length > 0) {
    return NextResponse.json(
      { ok: false, error: "Validation failed.", fields: errors },
      { status: 400 }
    );
  }

  const lead: Lead = {
    name,
    phone: phone || undefined,
    email: email || undefined,
    postal: postal ? postal.toUpperCase() : undefined,
    who: typeof body.who === "string" ? body.who : undefined,
    time: typeof body.time === "string" ? body.time : undefined,
    message: typeof body.message === "string" ? body.message.trim() : undefined,
  };

  try {
    await deliverLead(lead);
  } catch (err) {
    console.error("[consultation-request] Failed to deliver lead:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send your request. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
