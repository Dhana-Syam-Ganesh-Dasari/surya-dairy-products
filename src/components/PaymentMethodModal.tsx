import { useMemo, useState, useEffect } from "react";
import { X, Wallet, QrCode, Smartphone } from "lucide-react";
import {
  PaymentDetails,
  getQrCodeUrl,
  getUpiPaymentUrl,
} from "@/data/whatsappTemplate";
import { formatPrice } from "@/data/products";

interface PaymentMethodModalProps {
  isOpen: boolean;
  total: number;
  onClose: () => void;
  onConfirm: (payment: PaymentDetails) => void;
}

const PaymentMethodModal = ({
  isOpen,
  total,
  onClose,
  onConfirm,
}: PaymentMethodModalProps) => {
  const [selectedMethod, setSelectedMethod] = useState<"COD" | "UPI">("COD");
  const [transactionId, setTransactionId] = useState("");
  const [transactionIdError, setTransactionIdError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setSelectedMethod("COD");
      setTransactionId("");
      setTransactionIdError("");
    }
  }, [isOpen]);

  const qrCodeUrl = useMemo(() => getQrCodeUrl(total), [total]);
  const upiPaymentUrl = useMemo(() => getUpiPaymentUrl(total), [total]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (selectedMethod === "UPI") {
      const trimmedTransactionId = transactionId.trim();

      if (!trimmedTransactionId) {
        setTransactionIdError("Please enter transaction ID.");
        return;
      }

      setTransactionIdError("");
      onConfirm({
        method: "UPI",
        transactionId: trimmedTransactionId,
      });
      return;
    }

    onConfirm({ method: "COD" });
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-[60] animate-fade-in"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-[61] flex items-center justify-center p-3 sm:p-4">
        <div className="w-full max-w-xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl shadow-2xl border border-border animate-scale-in">
          {/* Header */}
          <div className="flex items-start justify-between p-4 md:p-6 border-b border-border">
            <div className="pr-3">
              <h2 className="font-display font-semibold text-lg sm:text-xl">
                Select Payment Method
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Total Amount: <span className="font-medium">{formatPrice(total)}</span>
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-accent transition-colors duration-300 flex-shrink-0"
              aria-label="Close payment modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* COD */}
              <button
                type="button"
                onClick={() => {
                  setSelectedMethod("COD");
                  setTransactionIdError("");
                }}
                className={`text-left rounded-xl border p-4 transition-all duration-300 w-full ${
                  selectedMethod === "COD"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Wallet className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground">
                      Cash on Delivery
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Pay at the time of delivery.
                    </p>
                  </div>
                </div>
              </button>

              {/* UPI */}
              <button
                type="button"
                onClick={() => {
                  setSelectedMethod("UPI");
                  setTransactionIdError("");
                }}
                className={`text-left rounded-xl border p-4 transition-all duration-300 w-full ${
                  selectedMethod === "UPI"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground">
                      UPI / QR Payment
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Pay using PhonePe, Google Pay, Paytm, or any UPI app.
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {/* UPI QR Section */}
            {selectedMethod === "UPI" && (
              <div className="mt-6 rounded-xl border border-border bg-accent/30 p-4 md:p-5 animate-fade-in">
                <div className="flex items-center gap-2 mb-4">
                  <QrCode className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Scan & Pay</h4>
                </div>

                <div className="flex flex-col items-center md:flex-row md:items-center gap-5">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-border w-fit mx-auto">
                    <img
                      src={qrCodeUrl}
                      alt="UPI QR Code"
                      className="w-40 h-40 sm:w-52 sm:h-52 object-contain"
                    />
                  </div>

                  <div className="flex-1 text-center md:text-left min-w-0 w-full">
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Scan this QR code with any UPI app, or tap the button below
                      to open a UPI app directly on your phone and complete the payment.
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        window.location.href = upiPaymentUrl;
                      }}
                      className="btn-primary inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                    >
                      <Smartphone className="w-4 h-4" />
                      Open UPI App
                    </button>

                    <div className="mt-4 w-full">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Transaction ID / UTR Number
                      </label>
                      <input
                        type="text"
                        value={transactionId}
                        onChange={(e) => {
                          setTransactionId(e.target.value);
                          if (transactionIdError) {
                            setTransactionIdError("");
                          }
                        }}
                        placeholder="Enter your transaction ID"
                        className={`w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none transition-colors ${
                          transactionIdError
                            ? "border-destructive focus:border-destructive"
                            : "border-border focus:border-primary"
                        }`}
                      />
                      {transactionIdError && (
                        <p className="text-sm text-destructive mt-2">
                          {transactionIdError}
                        </p>
                      )}
                    </div>

                    <p className="text-xs text-muted-foreground mt-3">
                      After payment, enter the transaction ID and continue to WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end p-4 md:p-6 border-t border-border bg-card">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-lg border border-border font-medium hover:bg-accent transition-colors duration-300"
            >
              Cancel
            </button>

            <button
              onClick={handleConfirm}
              className="btn-whatsapp w-full sm:w-auto justify-center"
            >
              Continue to WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethodModal;