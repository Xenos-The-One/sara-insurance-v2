================================================================================
SARA LIFE INSURANCE WEBSITE — SETUP & CUSTOMIZATION GUIDE
================================================================================

Thank you for using this website template! This guide will walk you through
everything you need to do to make this site fully yours and live on the web.

--------------------------------------------------------------------------------
1. REPLACING PLACEHOLDER TEXT
--------------------------------------------------------------------------------

Search the codebase for these placeholders and replace them with your real info:

  [YOUR PHONE NUMBER]     → Your actual phone number (e.g., (555) 234-5678)
  [YOUR EMAIL]            → Your email address
  [YOUR LICENSE NUMBER]   → Your state insurance license number
  [YOUR STATE]            → The state(s) where you're licensed
  [YOUR CITY]             → Your city
  sara@sarainsurance.com  → Your actual email address

Files to update:
  - client/src/components/Footer.tsx
  - client/src/pages/Contact.tsx
  - client/src/pages/Privacy.tsx
  - client/src/pages/Terms.tsx
  - client/src/components/BlogArticle.tsx
  - client/src/pages/About.tsx

--------------------------------------------------------------------------------
2. ADDING YOUR REAL HEADSHOT PHOTO
--------------------------------------------------------------------------------

Look for this comment in the code:
  <!-- REPLACE WITH YOUR REAL PHOTO -->

Files with photo placeholders:
  - client/src/pages/About.tsx (main headshot)
  - client/src/components/BlogArticle.tsx (author bio photo)

To replace:
  1. Upload your photo to /home/ubuntu/webdev-static-assets/
  2. Run: manus-upload-file --webdev /path/to/your-photo.jpg
  3. Copy the returned CDN URL
  4. Replace the `src` attribute in the <img> tag with your CDN URL

Your photo should be:
  - Professional headshot (head and shoulders)
  - Square or portrait orientation
  - At least 400x400 pixels
  - Well-lit, friendly expression

--------------------------------------------------------------------------------
3. SETTING UP EMAILJS (CONTACT FORM & QUOTE FORM)
--------------------------------------------------------------------------------

EmailJS lets you receive form submissions via email without a backend server.

Step 1: Create a free account at https://www.emailjs.com
Step 2: Add an email service (Gmail, Outlook, etc.)
Step 3: Create an email template for:
  - Contact form submissions
  - Quote form submissions
Step 4: Get your Service ID, Template ID, and Public Key
Step 5: Update the form submission code:

In client/src/pages/Contact.tsx, find the handleSubmit function and replace:
  // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID')
With:
  emailjs.send('your_service_id', 'your_template_id', form, 'your_public_key')

Also add the EmailJS script to client/index.html:
  <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
  <script>emailjs.init("YOUR_PUBLIC_KEY");</script>

--------------------------------------------------------------------------------
4. ADDING YOUR CALENDLY BOOKING WIDGET
--------------------------------------------------------------------------------

Step 1: Create a free account at https://calendly.com
Step 2: Set up your availability and event types (e.g., "Free 30-Min Consultation")
Step 3: Get your Calendly embed code from your Calendly dashboard
Step 4: In client/src/pages/Book.tsx, find the div with id="calendly-embed"
Step 5: Replace the placeholder content with your actual Calendly embed code:

  <div className="calendly-inline-widget" 
       data-url="https://calendly.com/YOUR_USERNAME/30min" 
       style={{minWidth: "320px", height: "700px"}}>
  </div>

Step 6: Add the Calendly script to client/index.html:
  <script src="https://assets.calendly.com/assets/external/widget.js" async></script>

--------------------------------------------------------------------------------
5. UPDATING YOUR LAST NAME
--------------------------------------------------------------------------------

The site uses "Sara" as the agent name. To add your last name:
  - Search for "Sara" in all component files
  - Update the name in the Navbar, Footer, About page, and Blog articles
  - Update the page title in client/index.html

--------------------------------------------------------------------------------
6. ADDING GOOGLE ANALYTICS (OPTIONAL)
--------------------------------------------------------------------------------

The site already includes Manus analytics. To add Google Analytics:
  1. Create a GA4 property at analytics.google.com
  2. Add your measurement ID to client/index.html:
     <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>

--------------------------------------------------------------------------------
7. DEPLOYING TO THE WEB
--------------------------------------------------------------------------------

Option A — Manus Hosting (Recommended, Built-in):
  1. Click the "Publish" button in the Manus Management UI
  2. Your site will be live at a .manus.space subdomain
  3. You can add a custom domain in Settings → Domains

Option B — Netlify (Free):
  1. Export your project as a ZIP from the Manus Code panel
  2. Go to netlify.com and create a free account
  3. Drag and drop your project folder to deploy
  4. Your site will be live at a .netlify.app subdomain
  5. Add a custom domain in Netlify's domain settings

Option C — Vercel (Free):
  1. Push your code to a GitHub repository
  2. Connect your GitHub account to vercel.com
  3. Import your repository and deploy

--------------------------------------------------------------------------------
8. CUSTOM DOMAIN SETUP
--------------------------------------------------------------------------------

To use a custom domain (e.g., sarainsurance.com):
  1. Purchase a domain from a registrar (Namecheap, GoDaddy, Google Domains)
  2. In Manus: Settings → Domains → Add Custom Domain
  3. Follow the DNS configuration instructions provided
  4. SSL certificate is automatically provisioned

--------------------------------------------------------------------------------
9. SEO CHECKLIST
--------------------------------------------------------------------------------

Before going live:
  [ ] Replace all placeholder text with real information
  [ ] Add your real headshot photo
  [ ] Update meta descriptions in client/index.html
  [ ] Submit your sitemap to Google Search Console
  [ ] Set up Google My Business listing
  [ ] Add your real phone number and email to all pages
  [ ] Verify your license number is correct

--------------------------------------------------------------------------------
10. ONGOING MAINTENANCE
--------------------------------------------------------------------------------

  - Review and update blog content quarterly
  - Check that all links work correctly
  - Update your Calendly availability as needed
  - Review and respond to contact form submissions promptly
  - Keep your license number and contact info current

================================================================================
SUPPORT
================================================================================

For technical questions about this website, contact the Manus support team.
For insurance licensing questions, contact your state's Department of Insurance.

================================================================================
