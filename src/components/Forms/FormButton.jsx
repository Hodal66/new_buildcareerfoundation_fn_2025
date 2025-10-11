/**
 * FormButton Component
 * Modern, accessible button with loading states, icons, and variants
 */

/* eslint-disable react/prop-types */
const FormButton = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  icon: Icon,
  iconPosition = "left",
  onClick,
  className = "",
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg sm:rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95";

  const variants = {
    primary: "bg-gradient-to-r from-grad1 via-grad2 to-grad3 text-white hover:shadow-lg focus:ring-grad1",
    secondary: "bg-white border-2 border-grad1 text-grad1 hover:bg-grad1 hover:text-white focus:ring-grad1",
    success: "bg-green-600 text-white hover:bg-green-700 hover:shadow-lg focus:ring-green-500",
    danger: "bg-red-600 text-white hover:bg-red-700 hover:shadow-lg focus:ring-red-500",
    warning: "bg-thankYouColor text-white hover:bg-orange-600 hover:shadow-lg focus:ring-thankYouColor",
    outline: "bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-300",
  };

  const sizes = {
    sm: "px-3 sm:px-4 py-2 text-xs sm:text-sm gap-1.5 sm:gap-2",
    md: "px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base gap-2 sm:gap-2.5",
    lg: "px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg gap-2.5 sm:gap-3",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${widthClass}
        ${className}
      `}
    >
      {/* Loading Spinner */}
      {loading && (
        <svg
          className="animate-spin h-4 w-4 sm:h-5 sm:w-5"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {/* Left Icon */}
      {!loading && Icon && iconPosition === "left" && (
        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
      )}

      {/* Button Text */}
      {!loading && <span>{children}</span>}
      {loading && <span>Processing...</span>}

      {/* Right Icon */}
      {!loading && Icon && iconPosition === "right" && (
        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
      )}
    </button>
  );
};

export default FormButton;
