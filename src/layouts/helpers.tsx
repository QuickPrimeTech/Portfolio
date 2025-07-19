// lib/whatsapp.ts
export function getWhatsAppLink(plan: string) {
  const baseURL = process.env.NEXT_PUBLIC_CONTACT_ME_URL; // e.g. https://wa.me/254717448835
  const message = encodeURIComponent(
    `Hi QuickPrimeTech, I'm interested in the ${plan} plan for my restaurant website. Can you tell me more?`
  );
  return `${baseURL}?text=${message}`;
}
