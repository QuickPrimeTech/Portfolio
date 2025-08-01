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

// This generates the link but for the plan pricing
export function getWhatsAppPlanLink(plan: string) {
  const message = `Hi QuickPrimeTech, I'm interested in the ${plan} plan for my restaurant website. Can you tell me more?`;
  return generateWhatsappLink(message);
}
