/**
 * ContactPage - Modern Redesign
 * Professional contact form with enhanced UI/UX
 * Features: Floating labels, smooth animations, validation feedback, success states
 */

/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import FooterComponentOne from "../components/FooterComponentOne";
import FormInput from "../components/Forms/FormInput";
import FormTextarea from "../components/Forms/FormTextarea";
import FormButton from "../components/Forms/FormButton";
import FormCard from "../components/Forms/FormCard";
import styles from "../styles";

// Icons
import { HiOutlineUser, HiOutlineMail, HiOutlineCheckCircle } from "react-icons/hi";
import { MdOutlineMessage } from "react-icons/md";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validation
  const validate = (name, value) => {
    switch (name) {
      case "name":
        return !value || value.trim().length < 2
          ? "Name must be at least 2 characters"
          : "";
      case "email":
        return !value || !/\S+@\S+\.\S+/.test(value)
          ? "Please enter a valid email"
          : "";
      case "message":
        return !value || value.trim().length < 10
          ? "Message must be at least 10 characters"
          : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
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
    setTouched({ name: true, email: true, message: true });

    // If no errors, submit
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTouched({});

        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderComponent />

      {/* Main Content */}
      <div className={`${styles.paddingX} flex-1 bg-gradient-to-br from-grad1 via-grad2 to-grad3 flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20`}>
        <FormCard
          logo="/logob.png"
          title="Contact Us"
          subtitle="The Build Career Foundation does not work directly with charities or individuals as such, solicitation requests will not receive a reply. If you are interested in learning more about the Build Career Foundation, complete the form."
          footer={
            <div className="text-center space-y-2">
              <p className="text-xs sm:text-sm text-gray-600">
                Special thanks to the Combined Federal Campaign (CFC) for data and resources support.
              </p>
              <p className="text-xs text-gray-500">
                The CFC is a program of the U.S. Office of Personnel Management.
              </p>
            </div>
          }
        >
          {/* Success Message */}
          {isSuccess && (
            <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-500">
              <HiOutlineCheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-sm sm:text-base font-semibold text-green-800">Message sent successfully!</p>
                <p className="text-xs sm:text-sm text-green-600">We'll get back to you soon.</p>
              </div>
            </div>
          )}

          {/* Required Fields Notice */}
          <div className="mb-6 text-xs sm:text-sm text-gray-600">
            Fields marked with <span className="text-red-500 font-semibold">*</span> are required
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Name Input */}
            <FormInput
              label="Full Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="John Doe"
              error={errors.name}
              touched={touched.name}
              required
              icon={HiOutlineUser}
              autoComplete="name"
            />

            {/* Email Input */}
            <FormInput
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="john@example.com"
              error={errors.email}
              touched={touched.email}
              required
              icon={HiOutlineMail}
              autoComplete="email"
              helperText="We'll never share your email with anyone"
            />

            {/* Message Textarea */}
            <FormTextarea
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tell us about your inquiry..."
              error={errors.message}
              touched={touched.message}
              required
              rows={6}
              maxLength={1000}
              helperText="Be as detailed as you'd like"
            />

            {/* Submit Button */}
            <FormButton
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={isSubmitting}
              icon={MdOutlineMessage}
            >
              Send Message
            </FormButton>
          </form>

          {/* Alternative Contact Methods */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-center text-gray-600 mb-4">Or reach us directly at:</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center text-sm">
              <a
                href="mailto:info@buildcareerfoundation.org"
                className="flex items-center gap-2 text-grad1 hover:text-grad2 transition-colors duration-200"
              >
                <HiOutlineMail className="w-5 h-5" />
                <span className="font-medium">info@buildcareerfoundation.org</span>
              </a>
            </div>
          </div>
        </FormCard>
      </div>

      <FooterComponentOne />
    </div>
  );
};
