import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function generateWhatsAppLink(productName?: string) {
  const phoneNumber = "918100192501";
  let message = "Hi Fashion Baruipur, I'm interested in exploring your collection.";
  
  if (productName) {
    message = `Hi Fashion Baruipur, I'm interested in ${productName}. Is it available?`;
  }
  
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
