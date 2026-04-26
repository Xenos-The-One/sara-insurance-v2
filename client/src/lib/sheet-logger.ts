/* =============================================================
   SHEET LOGGER — Sara Life Insurance
   Fire-and-forget Google Sheets lead logging via Apps Script.
   URL is read from VITE_GOOGLE_SHEET_WEBHOOK_URL env var.
   If the URL is not set or logging fails, the user-facing
   form flow is NOT affected.
   ============================================================= */

export async function logToSheet(data: Record<string, string | number>) {
  const url = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL;
  if (!url || url === 'your_apps_script_web_app_url_here') return;
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ ...data, timestamp: new Date().toISOString() }),
    });
  } catch (e) {
    console.warn('Sheet logging failed (non-blocking):', e);
  }
}
