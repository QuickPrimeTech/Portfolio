// @/lib/helpers.ts

export function generateWhatsappLink(message: string) {
  const baseUrl = process.env.NEXT_PUBLIC_CONTACT_ME_URL;

  if (!baseUrl) {
    throw new Error(
      "WhatsApp contact URL is not defined in environment variables."
    );
  }

  const encodedMessage = encodeURIComponent(message);
  return `${baseUrl}?text=${encodedMessage}`;
}
