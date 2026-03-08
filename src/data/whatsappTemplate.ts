import { currency, formatPrice } from "./products";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  unit: string;
}

export type PaymentMethod = "COD" | "UPI";

export interface PaymentDetails {
  method: PaymentMethod;
  transactionId?: string;
}

// WhatsApp configuration - easily editable
export const whatsappConfig = {
  phoneNumber: "919014579846", // wa.me works best without +
  businessName: "Surya Dairy Products",

  // UPI details
  upiId: "9014579846@ybl", // replace with your actual UPI ID
  upiName: "Surya Dairy Products",
};

// Customizable message template
export const generateWhatsAppMessage = (
  items: CartItem[],
  total: number,
  payment: PaymentDetails,
): string => {
  const productLines = items
    .map(
      (item) =>
        `${item.quantity}x ${item.name} – ${formatPrice(item.price * item.quantity)}`,
    )
    .join("\n");

  const paymentText =
    payment.method === "COD"
      ? `Payment Method: *Cash on Delivery (COD)*`
      : `Payment Method: *Online Payment (UPI / QR)*
UPI ID: *${whatsappConfig.upiId}*
Transaction ID: *${payment.transactionId || "Not Provided"}*
The payment was completed through UPI app / QR code scan.`;

  const message = `Hi Surya Kumari!
I'd like to place an order from *${whatsappConfig.businessName}*:

Products:
${productLines}

------------------
*Total Amount: ${formatPrice(total)}*

${paymentText}

Please confirm availability, delivery time, and payment details.
Thank you!`;

  return message;
};

// Generate WhatsApp URL
export const getWhatsAppOrderUrl = (
  items: CartItem[],
  total: number,
  payment: PaymentDetails,
): string => {
  const message = generateWhatsAppMessage(items, total, payment);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodedMessage}`;
};

// Direct WhatsApp contact URL (without message)
export const getWhatsAppContactUrl = (): string => {
  return `https://wa.me/${whatsappConfig.phoneNumber}`;
};

// Generate UPI payment URL
export const getUpiPaymentUrl = (total: number): string => {
  const params = new URLSearchParams({
    pa: whatsappConfig.upiId,
    pn: whatsappConfig.upiName,
    am: total.toFixed(2),
    cu: "INR",
    tn: `${whatsappConfig.businessName} Order Payment`,
  });

  return `upi://pay?${params.toString()}`;
};

// Generate QR code image URL for UPI payment
export const getQrCodeUrl = (total: number): string => {
  const upiUrl = getUpiPaymentUrl(total);
  return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiUrl)}`;
};