/* =============================================================
   EMAILJS CONFIGURATION — Sara Life Insurance
   Credentials are read from Vite environment variables.
   Set these in a .env file at the project root (never commit it).

   Required env vars (see .env.example):
     VITE_EMAILJS_SERVICE_ID
     VITE_EMAILJS_CONTACT_TEMPLATE_ID
     VITE_EMAILJS_QUOTE_TEMPLATE_ID
     VITE_EMAILJS_PUBLIC_KEY
     VITE_CALENDLY_URL
   ============================================================= */

export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
export const EMAILJS_CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'YOUR_CONTACT_TEMPLATE_ID';
export const EMAILJS_QUOTE_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID || 'YOUR_QUOTE_TEMPLATE_ID';
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
export const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || '[SARA TO FILL IN — Calendly URL]';
