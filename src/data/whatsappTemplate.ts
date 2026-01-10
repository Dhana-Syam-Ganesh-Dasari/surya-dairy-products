import { currency, formatPrice } from "./products";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  unit: string;
}

// WhatsApp configuration - easily editable
export const whatsappConfig = {
  phoneNumber: "+919014579846", // Replace with actual WhatsApp number (with country code, no +)
  businessName: "Kumari Dairy Milk",
};

// Customizable message template
export const generateWhatsAppMessage = (items: CartItem[], total: number): string => {
  const productLines = items
    .map((item) => `${item.quantity}x ${item.name} – ${formatPrice(item.price * item.quantity)}`)
    .join("\n");

  const message = `Hi Surya Kumari Garu!
I'd like to place an order from *${whatsappConfig.businessName}*:

Products:
${productLines}

------------------
*Total Amount: ${formatPrice(total)}*

Please confirm availability, delivery time, and payment details.
Thank you!`;

  return message;
};

// Generate WhatsApp URL
export const getWhatsAppOrderUrl = (items: CartItem[], total: number): string => {
  const message = generateWhatsAppMessage(items, total);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodedMessage}`;
};

// Direct WhatsApp contact URL (without message)
export const getWhatsAppContactUrl = (): string => {
  return `https://wa.me/${whatsappConfig.phoneNumber}`;
};
