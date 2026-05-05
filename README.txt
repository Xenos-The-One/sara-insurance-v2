================================================================================
SARA SIBLINI — LIFE INSURANCE WEBSITE — SETUP & CUSTOMIZATION GUIDE
================================================================================

This guide walks you through everything you need to do to make this site
fully yours and live on the web.

Agent:    Sara Siblini
Company:  Primerica Life Insurance Company of Canada
Province: Ontario, Canada
FSRA Lic. #: NUV56

--------------------------------------------------------------------------------
1. REMAINING PLACEHOLDERS TO FILL IN
--------------------------------------------------------------------------------

The following placeholders still need your real information.
Search the codebase for each one and replace it:

  [SARA TO FILL IN — business email address]
      → Your professional email address (e.g., sara@sarasiblini.ca)
      Files: Footer.tsx, Contact.tsx, Privacy.tsx, Terms.tsx

  [SARA TO FILL IN — personal biography paragraph]
      → A short paragraph about yourself (2–4 sentences)
      File: client/src/pages/About.tsx

  [SARA TO FILL IN — real client testimonials, once Sara has clients
   who have provided written consent]
      → Replace with actual testimonials after obtaining written consent
      File: client/src/pages/Home.tsx

  [SARA TO FILL IN — date when site goes live]
      → The date you publish the site (e.g., May 2026)
      Files: client/src/pages/Privacy.tsx, client/src/pages/Terms.tsx

Your phone number (111) 234-5678 has already been added to the site.
Your FSRA licence number NUV56 is already shown on all pages.
Your province (Ontario, Canada) is already set throughout the site.

--------------------------------------------------------------------------------
2. ADDING YOUR REAL HEADSHOT PHOTO
--------------------------------------------------------------------------------

Your professional headshot has already been uploaded and is live on:
  - About page (main headshot)
  - All blog article author bios

If you ever need to update your photo:
  1. Save your new photo to /home/ubuntu/webdev-static-assets/
  2. Run: manus-upload-file --webdev /path/to/your-photo.jpg
  3. Copy the returned CDN URL
  4. Replace the `src` attribute in the <img> tag in:
       client/src/pages/About.tsx
       client/src/components/BlogArticle.tsx

Your photo should be:
  - Professional headshot (head and shoulders)
  - Square or portrait orientation
  - At least 400×400 pixels
  - Well-lit, neutral background

--------------------------------------------------------------------------------
3. SETTING UP EMAILJS (CONTACT FORM & QUOTE FORM)
--------------------------------------------------------------------------------

EmailJS lets you receive form submissions by email — no backend required.

Step 1: Create a free account at https://www.emailjs.com
Step 2: Add your email service (Gmail, Outlook, etc.)
Step 3: Create two email templates:
          a) Contact form template
          b) Quote form template
Step 4: Get your Service ID, both Template IDs, and your Public Key
Step 5: Add them as Secrets in the Manus Management UI (Settings → Secrets):

  VITE_EMAILJS_SERVICE_ID              → your EmailJS service ID
  VITE_EMAILJS_CONTACT_TEMPLATE_ID     → your contact form template ID
  VITE_EMAILJS_QUOTE_TEMPLATE_ID       → your quote form template ID
  VITE_EMAILJS_PUBLIC_KEY              → your EmailJS public key

Step 6: Test by submitting your own contact form and confirming you receive
        an email notification.

Template variables available for your EmailJS templates:
  Contact form: {{from_name}}, {{from_email}}, {{phone}}, {{subject}},
                {{message}}, {{casl_consent}}, {{submitted_at}}
  Quote form:   {{first_name}}, {{last_name}}, {{full_name}}, {{from_email}},
                {{phone}}, {{date_of_birth}}, {{age}}, {{gender}},
                {{tobacco}}, {{health}}, {{coverage_type}},
                {{coverage_amount}}, {{term_length}},
                {{estimate_low}}, {{estimate_high}},
                {{casl_consent}}, {{submitted_at}}

--------------------------------------------------------------------------------
4. SETTING UP CALENDLY (BOOK A CALL PAGE)
--------------------------------------------------------------------------------

Step 1: Log in to your Calendly account at https://calendly.com
Step 2: Create (or confirm) your event: "Free Financial Needs Analysis — 30 min"
Step 3: Set your available hours for Ontario (Eastern Time)
Step 4: Copy your booking URL (e.g., https://calendly.com/sara-siblini/30min)
Step 5: Add it as a Secret in the Manus Management UI (Settings → Secrets):

  VITE_CALENDLY_URL    → https://calendly.com/your-username/30min

Step 6: Visit /book on your site to confirm the calendar loads correctly.

--------------------------------------------------------------------------------
5. SETTING UP GOOGLE SHEETS LEAD LOGGING (OPTIONAL)
--------------------------------------------------------------------------------

See GOOGLE-SHEETS-SETUP.txt at the project root for full instructions.
Once set up, add the webhook URL as a Secret:

  VITE_GOOGLE_SHEET_WEBHOOK_URL    → your Apps Script Web App URL

--------------------------------------------------------------------------------
6. DEPLOYING TO THE WEB
--------------------------------------------------------------------------------

Option A — Manus Hosting (Recommended, Built-in):
  1. Click the "Publish" button in the Manus Management UI
  2. Your site will be live at sarainsure-8qihdgfb.manus.space
  3. Add a custom domain in Settings → Domains

Option B — Netlify (Free):
  1. Export your project as a ZIP from the Manus Code panel
  2. Go to netlify.com → create a free account
  3. Drag and drop your project folder to deploy
  4. Add a custom domain in Netlify's domain settings

Option C — Vercel (Free):
  1. Push your code to a GitHub repository
  2. Connect your GitHub account to vercel.com
  3. Import your repository and deploy

--------------------------------------------------------------------------------
7. CUSTOM DOMAIN SETUP
--------------------------------------------------------------------------------

To use a custom domain (e.g., sarasiblini.ca):
  1. Purchase a domain from a registrar (e.g., Namecheap, Google Domains)
  2. In Manus: Settings → Domains → Add Custom Domain
  3. Follow the DNS configuration instructions provided
  4. SSL certificate is automatically provisioned

--------------------------------------------------------------------------------
8. SEO CHECKLIST
--------------------------------------------------------------------------------

Before going live:
  [ ] Fill in all remaining [SARA TO FILL IN] placeholders (see Section 1)
  [ ] Set the Privacy Policy and Terms "Last updated" date
  [ ] Submit your sitemap to Google Search Console
  [ ] Set up a Google Business Profile for Sara Siblini Insurance
  [ ] Verify your FSRA licence number NUV56 is displayed correctly on all pages
  [ ] Test all forms end-to-end (contact, quote, book a call)

--------------------------------------------------------------------------------
9. COMPLIANCE REMINDERS (ONTARIO / FSRA)
--------------------------------------------------------------------------------

  - You are licensed in Ontario, Canada under FSRA Lic. #NUV56
  - All insurance products are offered through Primerica Life Insurance
    Company of Canada
  - The site sells only Term Life Insurance — no whole life, final expense,
    disability, or critical illness products are promoted
  - All quote estimates include the required "not a binding quote" disclaimer
  - CASL consent checkboxes are present on both the contact and quote forms
  - The Privacy Policy references PIPEDA (Canada's federal privacy law)

--------------------------------------------------------------------------------
10. ONGOING MAINTENANCE
--------------------------------------------------------------------------------

  - Review and update blog content quarterly
  - Check that all links and forms work correctly
  - Update your Calendly availability as needed
  - Respond to contact form submissions within 1 business day
  - Keep your FSRA licence number and contact info current
  - Obtain written consent before publishing any client testimonials

================================================================================
SUPPORT
================================================================================

For technical questions about this website, contact the Manus support team.
For insurance licensing questions, contact FSRA (Financial Services Regulatory
Authority of Ontario) at https://www.fsrao.ca

================================================================================
