/**
 * PaymentByVissa Page - Modern Redesign
 * Professional payment form with credit card UI/UX
 * Features: Card preview, input masking, validation, secure design
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/Forms/FormInput";
import FormButton from "../components/Forms/FormButton";
import FormCard from "../components/Forms/FormCard";
import styles from "../styles";

// Icons
import { HiOutlineCreditCard, HiOutlineCalendar, HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi";
import { MdPayment } from "react-icons/md";

function PaymentByVissaPage() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  // Format card number (add spaces every 4 digits)
  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\s/g, "");
    const chunks = cleaned.match(/.{1,4}/g);
    return chunks ? chunks.join(" ") : cleaned;
  };

  // Format expiry date (MM/YY)
  const formatExpiryDate = (value) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  // Validation
  const validate = (name, value) => {
    switch (name) {
      case "cardNumber":
        const cleaned = value.replace(/\s/g, "");
        return cleaned.length !== 16 ? "Card number must be 16 digits" : "";
      case "expiryDate":
        const [month, year] = value.split("/");
        const isValidMonth = month && parseInt(month) >= 1 && parseInt(month) <= 12;
        const isValidLength = value.replace(/\D/g, "").length === 4;
        return !isValidMonth || !isValidLength ? "Invalid expiry date (MM/YY)" : "";
      case "cvv":
        return value.length !== 3 ? "CVV must be 3 digits" : "";
      case "cardName":
        return value.trim().length < 3 ? "Please enter name as on card" : "";
      case "amount":
        return !value || parseFloat(value) < 1 ? "Please enter a valid amount" : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Apply formatting
    if (name === "cardNumber") {
      value = formatCardNumber(value.replace(/\D/g, "").slice(0, 16));
    } else if (name === "expiryDate") {
      value = formatExpiryDate(value);
    } else if (name === "cvv") {
      value = value.replace(/\D/g, "").slice(0, 3);
    } else if (name === "amount") {
      value = value.replace(/[^\d.]/g, "");
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched({ cardNumber: true, expiryDate: true, cvv: true, cardName: true, amount: true });

    // If no errors, process payment
    if (Object.keys(newErrors).length === 0) {
      setIsProcessing(true);
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false);
        alert("Payment successful! Thank you for your donation.");
      }, 2000);
    }
  };

  // Masked card number for preview
  const maskedCardNumber = formData.cardNumber
    ? formData.cardNumber.slice(0, -4).replace(/\d/g, "•") + formData.cardNumber.slice(-4)
    : "•••• •••• •••• ••••";

  return (
    <div className={`${styles.flexCenter} min-h-screen p-4 sm:p-6 md:p-8 bg-gradient-to-br from-grad1 via-grad2 to-grad3`}>
      <div className="w-full max-w-5xl">
        <FormCard
          logo="/Bcf_logo.png"
          title="Secure Donation Payment"
          subtitle="Your generous contribution helps us build careers and change lives"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {/* Left Side - Card Preview */}
            <div className="space-y-6">
              {/* Card Preview */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl aspect-[1.586/1] flex flex-col justify-between">
                  {/* Card Chip */}
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-10 sm:w-14 sm:h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg"></div>
                    <img src="/visaImage.png" alt="Visa" className="h-8 sm:h-10 opacity-90" />
                  </div>

                  {/* Card Number */}
                  <div className="text-white font-mono text-lg sm:text-xl md:text-2xl tracking-wider">
                    {maskedCardNumber}
                  </div>

                  {/* Card Details */}
                  <div className="flex justify-between items-end text-white">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">CARDHOLDER NAME</p>
                      <p className="font-semibold text-sm sm:text-base uppercase">
                        {formData.cardName || "YOUR NAME"}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">EXPIRES</p>
                      <p className="font-semibold text-sm sm:text-base">
                        {formData.expiryDate || "MM/YY"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <HiOutlineLockClosed className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="text-sm font-semibold text-green-800">256-bit SSL Encrypted</p>
                    <p className="text-xs text-green-600">Your payment information is secure</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Payment Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {/* Card Number */}
                <FormInput
                  label="Card Number"
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="1234 5678 9012 3456"
                  error={errors.cardNumber}
                  touched={touched.cardNumber}
                  required
                  icon={HiOutlineCreditCard}
                  helperText="16-digit number on your card"
                />

                {/* Expiry and CVV Row */}
                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    label="Expiry Date"
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="MM/YY"
                    error={errors.expiryDate}
                    touched={touched.expiryDate}
                    required
                    icon={HiOutlineCalendar}
                  />

                  <FormInput
                    label="CVV"
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="123"
                    error={errors.cvv}
                    touched={touched.cvv}
                    required
                    icon={HiOutlineLockClosed}
                    helperText="3 digits on back"
                  />
                </div>

                {/* Cardholder Name */}
                <FormInput
                  label="Cardholder Name"
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="John Doe"
                  error={errors.cardName}
                  touched={touched.cardName}
                  required
                  icon={HiOutlineUser}
                  helperText="Name as it appears on card"
                />

                {/* Donation Amount */}
                <FormInput
                  label="Donation Amount (USD)"
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="100.00"
                  error={errors.amount}
                  touched={touched.amount}
                  required
                  icon={MdPayment}
                  helperText="Minimum donation: $1.00"
                />

                {/* Submit Button */}
                <FormButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={isProcessing}
                  icon={MdPayment}
                >
                  {isProcessing ? "Processing Payment..." : `Donate $${formData.amount || "0.00"}`}
                </FormButton>

                {/* Cancel Link */}
                <Link to="/">
                  <FormButton
                    type="button"
                    variant="outline"
                    size="md"
                    fullWidth
                  >
                    Cancel
                  </FormButton>
                </Link>
              </form>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-xs text-gray-600 mb-3">We accept</p>
                <div className="flex justify-center gap-4">
                  <img src="/visaImage.png" alt="Visa" className="h-6 opacity-60" />
                  <span className="text-xs text-gray-400">Secure Payment Gateway</span>
                </div>
              </div>
            </div>
          </div>
        </FormCard>
      </div>
    </div>
  );
}

export default PaymentByVissaPage;
