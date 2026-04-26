/* =============================================================
   EMAILJS CONFIGURATION — Sara Life Insurance
   Credentials are read from Vite environment variables.
   Set these in a .env file at the project root (never commit it).

   Required env vars:
     VITE_EMAILJS_PUBLIC_KEY      — Your EmailJS Public Key (Account > API Keys)
     VITE_EMAILJS_SERVICE_ID      — Your EmailJS Service ID
     VITE_EMAILJS_CONTACT_TEMPLATE_ID  — Template ID for the Contact form
     VITE_EMAILJS_QUOTE_TEMPLATE_ID    — Template ID for the Quote form

   See .env.example for the exact variable names.
   ============================================================= */

export const EMAILJS_CONFIG = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID as string,
  quoteTemplateId: import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID as string,
} as const;

/** Returns true only when all four required env vars are present at runtime. */
export function isEmailJSConfigured(): boolean {
  return !!(
    EMAILJS_CONFIG.publicKey &&
    EMAILJS_CONFIG.serviceId &&
    EMAILJS_CONFIG.contactTemplateId &&
    EMAILJS_CONFIG.quoteTemplateId
  );
}
