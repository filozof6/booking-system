import axios from 'axios';

/**
 * Send a plain‑text WhatsApp message through Meta’s Cloud API.
 *
 * @param params.accessToken   Your permanent or long‑lived WhatsApp access token
 * @param params.phoneNumberId The “Phone number ID” shown in WhatsApp → API Setup
 * @param params.to            Recipient in E.164 format, e.g. "593987654321"
 * @param params.text          Message body (max 4096 chars)
 * @param params.previewUrl    Whether URL previews should be rendered (default false)
 * @param params.apiVersion    Graph API version, default "v19.0"
 *
 * @returns The raw Cloud API response, useful for logging / troubleshooting
 *
 * @throws  Error wrapping the HTTP status and Cloud‑API error body if the call fails
 */
export async function sendWhatsAppText({
  accessToken,
  phoneNumberId,
  to,
  text,
  previewUrl = false,
  apiVersion = 'v19.0',
}: {
  accessToken: string;
  phoneNumberId: string;
  to: string;
  text: string;
  previewUrl?: boolean;
  apiVersion?: string;
}) {
  const url = `https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`;

  const payload = {
    messaging_product: 'whatsapp',
    to,
    type: 'text',
    text: {
      body: text,
      preview_url: previewUrl,
    },
  };

  try {
    const { data } = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    return data; // contains message ID, etc.
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const { status, data } = err.response ?? {};
      throw new Error(
        `WhatsApp API error ${status}: ${JSON.stringify(data)}`
      );
    }
    throw err;
  }
}
