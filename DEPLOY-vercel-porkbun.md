# Deploying your site: Vercel + Porkbun domain

Your website runs on **Vercel** (free, and made by the creators of the framework
your site uses). Your domain stays at **Porkbun** — you'll just point it at
Vercel. This guide is written to be followed start to finish, no coding needed.

Total time: about 20–30 minutes. Cost: free.

---

## Before you start

You'll need:

- The project folder (unzip `edmonton-walk-in-bath-experts.zip`).
- A free **GitHub** account — https://github.com/signup
- A free **Vercel** account — https://vercel.com/signup (sign up *with* GitHub, it's easiest)
- Your **Porkbun** login.

---

## Step 1 — Put the project on GitHub

Vercel deploys from a GitHub repository. The no-command-line way:

1. Sign in to GitHub and click **New repository** (the **+** at top right → *New repository*).
2. Name it something like `walk-in-bath-website`. Leave it **Private** if you prefer. Click **Create repository**.
3. On the next screen, click **uploading an existing file** (the link in the middle).
4. Drag the **contents** of the unzipped project folder into the upload box
   — that means the files *inside* `edmonton-walk-in-bath-experts/`
   (`app`, `components`, `lib`, `package.json`, etc.), not the folder itself.
   - Skip `node_modules` and `.next` if you happen to have them — they aren't needed.
5. Click **Commit changes**.

> Prefer the command line? From inside the project folder:
> ```bash
> git init && git add . && git commit -m "Initial site"
> git branch -M main
> git remote add origin https://github.com/YOUR-USERNAME/walk-in-bath-website.git
> git push -u origin main
> ```

---

## Step 2 — Deploy on Vercel

1. Go to https://vercel.com and sign in (choose **Continue with GitHub**).
2. Click **Add New… → Project**.
3. Find your `walk-in-bath-website` repo and click **Import**.
4. Vercel automatically detects the setup — you don't need to change anything.
   Just click **Deploy**.
5. Wait a minute. When it finishes, you'll get a live link like
   `walk-in-bath-website.vercel.app`. **Click it — your site is now live** on
   the internet. 🎉

At this point you can already view and click through the whole site. The
custom domain comes next.

---

## Step 3 — Connect your Porkbun domain

1. In your Vercel project, go to **Settings → Domains**.
2. Type your domain (e.g. `edmontonwalkinbathexperts.ca`) and click **Add**.
3. Vercel will show you the **exact DNS records** to create — usually:
   - an **A record** for your root domain (`@`), and
   - a **CNAME record** for `www`.

   **Use the exact values Vercel shows you on that screen** (they are the
   current, correct ones). Keep that Vercel tab open while you do the next part.

4. In a new tab, sign in to **Porkbun**, open **Account → Domain Management**,
   find your domain, and click **Details / DNS** (the DNS records editor).
5. Add the records Vercel gave you:
   - **A record:** Host/Name = leave blank or `@`; Answer/Value = the IP Vercel showed.
   - **CNAME record:** Host/Name = `www`; Answer/Value = the target Vercel showed
     (often `cname.vercel-dns.com`).
   - If Porkbun already has default "parking" A/ALIAS/CNAME records on `@` or
     `www`, delete those first so they don't conflict.
6. Save. Back in Vercel, it will verify the domain automatically — this can take
   anywhere from a few minutes to a couple of hours (occasionally longer) while
   DNS updates. Vercel adds the HTTPS certificate for you at no cost.

When Vercel shows the domain as **Valid / Assigned**, your site is live on your
own domain, secured with HTTPS.

---

## Step 4 — Update the site's own address (one small edit)

So search engines and the sitemap use your real domain:

1. Open `lib/site.ts`.
2. Find `url:` near the top and set it to your real domain, e.g.
   `url: "https://www.edmontonwalkinbathexperts.ca",`
3. Save, then push the change to GitHub (upload the file again the same way as
   Step 1, or `git commit`/`git push`). **Vercel redeploys automatically** every
   time you change the repo.

---

## Step 5 — Turn on the consultation form email (important)

The form is already built to email you leads using **Resend** — you just need to
add a key so it can send. Until you do, the form still works (submissions are
accepted and safely logged), it just won't email yet.

1. Create a free account at https://resend.com.
2. In Resend, create an **API key** (Resend → API Keys → Create).
3. In Vercel: **Settings → Environment Variables**, add:
   - **Name:** `RESEND_API_KEY`  **Value:** the key you just created.
   Then **Redeploy** (Vercel → Deployments → ⋯ → Redeploy) so it takes effect.
4. **Test it:** submit the form on your live site. For this first test, the lead
   arrives at the email address you used to sign up for Resend. ✅

### To receive leads at info@seniorsafetysolutions.ca (production)

Resend needs to confirm you own your domain before it will send *from* it:

1. In Resend, go to **Domains → Add Domain** and enter your domain
   (e.g. `seniorsafetysolutions.ca` or the site's domain).
2. Resend shows a few DNS records to add. Add them in **Porkbun** (same DNS
   editor you used in Step 3). Resend verifies automatically.
3. Back in Vercel, add one more environment variable:
   - **Name:** `LEAD_FROM_EMAIL`
     **Value:** `Edmonton Walk-In Bath Experts <website@yourdomain.ca>`
     (use an address on the domain you just verified).
   Redeploy. Leads now arrive at `info@seniorsafetysolutions.ca` by default,
   and you can reply straight to the customer.

> Want leads sent somewhere other than the business email in `lib/site.ts`?
> Add a `LEAD_TO_EMAIL` environment variable with the address you prefer.

---

## Making changes later

Any time you want to change text, phone number, service areas, FAQ answers, etc.,
edit `lib/site.ts` (or the relevant file), then upload/commit to GitHub. Vercel
redeploys within a minute. No need to touch Porkbun again — the domain stays
pointed at Vercel.

---

## Quick reference

| Thing | Where |
| --- | --- |
| Live app hosting | Vercel (free) |
| Domain registrar | Porkbun |
| What Porkbun does here | DNS only — points your domain at Vercel |
| Auto-redeploy | Push a change to GitHub → Vercel rebuilds |
| Business info to edit | `lib/site.ts` |
| Finish the form email | `app/api/consultation/route.ts` + Resend key |
