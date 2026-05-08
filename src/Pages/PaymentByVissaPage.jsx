/**
 * PaymentByVissa Page - Professional Centered Redesign
 * Features: Logo, card preview, input masking, validation, secure design, back navigation
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles";

// Icons
import {
  HiOutlineCreditCard,
  HiOutlineCalendar,
  HiOutlineLockClosed,
  HiOutlineUser,
  HiArrowLeft,
  HiShieldCheck,
} from "react-icons/hi";
import { MdPayment } from "react-icons/md";

function PaymentByVissaPage() {
  const navigate = useNavigate();
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
      case "cardNumber": {
        const cleaned = value.replace(/\s/g, "");
        return cleaned.length !== 16 ? "Card number must be 16 digits" : "";
      }
      case "expiryDate": {
        const [month] = value.split("/");
        const isValidMonth = month && parseInt(month) >= 1 && parseInt(month) <= 12;
        const isValidLength = value.replace(/\D/g, "").length === 4;
        return !isValidMonth || !isValidLength ? "Invalid expiry date (MM/YY)" : "";
      }
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
    ? formData.cardNumber
    : "•••• •••• •••• ••••";

  // Input field component
  const InputField = ({ label, icon: Icon, error, touched: isTouched, helperText, ...props }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <input
          {...props}
          className={`w-full ${Icon ? "pl-10" : "pl-4"} pr-4 py-3 bg-gray-50 border-2 rounded-xl text-gray-900 font-medium text-sm
            transition-all duration-200 outline-none
            ${isTouched && error
              ? "border-red-400 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-100"
              : "border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-gray-300"
            }`}
        />
      </div>
      {isTouched && error && (
        <p className="mt-1 text-xs text-red-500 font-medium">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-xs text-gray-400">{helperText}</p>
      )}
    </div>
  );

  return (
    <div className={`min-h-screen bg-gradient-to-br from-grad1 via-grad2 to-grad3 flex flex-col`}>
      {/* Top Bar */}
      <div className={`${styles.paddingX} py-4 flex items-center justify-between`}>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/80 hover:text-white font-semibold text-sm transition-colors duration-300 group cursor-pointer"
        >
          <HiArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform duration-300" />
          Back
        </button>
        <img
          src="/logob.png"
          alt="Build Career Foundation"
          className="h-10 sm:h-12 object-contain"
        />
      </div>

      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 pb-8">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Secure Donation
            </h1>
            <p className="text-white/70 text-sm sm:text-base max-w-md mx-auto">
              Your generous contribution helps us build careers and change lives
            </p>
          </div>

          {/* Card Container */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              
              {/* Left Panel - Card Preview */}
              <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 sm:p-8 flex flex-col justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-8">
                  <img
                    src="/logob.png"
                    alt="BCF"
                    className="h-8 sm:h-10 object-contain brightness-0 invert"
                  />
                  <div className="text-white">
                    <p className="font-bold text-sm leading-tight">Build Career</p>
                    <p className="text-xs text-gray-400 leading-tight">FOUNDATION</p>
                  </div>
                </div>

                {/* Card Preview */}
                <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-5 sm:p-6 shadow-lg mb-6">
                  {/* Card Chip & Brand */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-md opacity-90"></div>
                    <div className="text-white/80 text-xs font-bold tracking-widest">VISA</div>
                  </div>

                  {/* Card Number */}
                  <div className="text-white font-mono text-base sm:text-lg tracking-[0.15em] mb-6">
                    {maskedCardNumber}
                  </div>

                  {/* Card Details */}
                  <div className="flex justify-between items-end text-white">
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-wider mb-0.5">Cardholder</p>
                      <p className="font-semibold text-xs sm:text-sm uppercase truncate max-w-[140px]">
                        {formData.cardName || "YOUR NAME"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-white/50 uppercase tracking-wider mb-0.5">Expires</p>
                      <p className="font-semibold text-xs sm:text-sm">
                        {formData.expiryDate || "MM/YY"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Security Badges */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/70">
                    <HiShieldCheck className="w-5 h-5 text-green-400 shrink-0" />
                    <p className="text-xs">256-bit SSL encrypted connection</p>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <HiOutlineLockClosed className="w-5 h-5 text-green-400 shrink-0" />
                    <p className="text-xs">Your payment info is never stored</p>
                  </div>
                </div>
              </div>

              {/* Right Panel - Payment Form */}
              <div className="lg:col-span-3 p-6 sm:p-8 md:p-10">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Payment Details</h2>
                <p className="text-sm text-gray-500 mb-6">Fill in your card information below</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Donation Amount - Prominent */}
                  <div className="bg-blue-50 border-2 border-blue-100 rounded-xl p-4 mb-2">
                    <InputField
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
                  </div>

                  {/* Cardholder Name */}
                  <InputField
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

                  {/* Card Number */}
                  <InputField
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
                    <InputField
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

                    <InputField
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

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className={`w-full py-3.5 rounded-xl font-bold text-white text-base transition-all duration-300 flex items-center justify-center gap-2
                      ${isProcessing
                        ? "bg-gray-400 cursor-not-allowed"
                        : `${styles.blueGradient} hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98] cursor-pointer`
                      }`}
                  >
                    {isProcessing ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <MdPayment className="text-xl" />
                        {`Donate $${formData.amount || "0.00"}`}
                      </>
                    )}
                  </button>

                  {/* Cancel */}
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="w-full py-3 rounded-xl font-semibold text-gray-600 text-sm border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                  >
                    Cancel
                  </button>
                </form>

                {/* Trust Footer */}
                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-center gap-6">
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <HiOutlineLockClosed className="w-4 h-4" />
                    <span className="text-xs font-medium">Secure</span>
                  </div>
                  <div className="w-px h-4 bg-gray-200"></div>
                  <span className="text-xs font-bold text-gray-500 tracking-wider">VISA</span>
                  <div className="w-px h-4 bg-gray-200"></div>
                  <span className="text-xs font-bold text-gray-500 tracking-wider">MASTERCARD</span>
                  <div className="w-px h-4 bg-gray-200"></div>
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <HiShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-medium">Protected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentByVissaPage;
