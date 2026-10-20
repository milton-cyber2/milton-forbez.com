import { brand } from "@/mocks/site";

export interface HandoffField {
  label: string;
  value: string;
}

export interface HandoffLinks {
  mailto: string;
  whatsapp: string;
}

export function composeMessage(title: string, fields: HandoffField[]): string {
  const lines = fields
    .filter((field) => field.value && field.value.trim() !== "")
    .map((field) => `${field.label}: ${field.value.trim()}`);
  return `${title}\n\n${lines.join("\n")}\n\n— Sent from the ${brand.name} website`;
}

export function buildHandoff(title: string, fields: HandoffField[]): HandoffLinks {
  const body = composeMessage(title, fields);
  const phone = brand.whatsapp.replace(/\D/g, "");
  return {
    mailto: `mailto:${brand.email}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`,
    whatsapp: `https://wa.me/${phone}?text=${encodeURIComponent(body)}`,
  };
}