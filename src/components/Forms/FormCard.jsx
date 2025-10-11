/**
 * FormCard Component
 * Modern card container for forms with optional header and footer
 */

/* eslint-disable react/prop-types */
const FormCard = ({
  children,
  title,
  subtitle,
  footer,
  logo,
  className = "",
  contentClassName = "",
}) => {
  return (
    <div
      className={`
        w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl
        bg-white
        rounded-xl sm:rounded-2xl md:rounded-3xl
        shadow-xl hover:shadow-2xl
        transition-shadow duration-300
        overflow-hidden
        ${className}
      `}
    >
      {/* Header Section */}
      {(logo || title || subtitle) && (
        <div className="px-6 sm:px-8 md:px-10 lg:px-12 pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
          {/* Logo */}
          {logo && (
            <div className="flex justify-center mb-4 sm:mb-6">
              {typeof logo === "string" ? (
                <img
                  src={logo}
                  alt="Logo"
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain"
                />
              ) : (
                logo
              )}
            </div>
          )}

          {/* Title */}
          {title && (
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-2 sm:mb-3">
              {title}
            </h2>
          )}

          {/* Subtitle */}
          {subtitle && (
            <p className="text-xs sm:text-sm md:text-base text-center text-gray-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className={`px-6 sm:px-8 md:px-10 lg:px-12 py-6 sm:py-8 md:py-10 ${contentClassName}`}>
        {children}
      </div>

      {/* Footer Section */}
      {footer && (
        <div className="px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 bg-gray-50 border-t border-gray-100">
          {footer}
        </div>
      )}
    </div>
  );
};

export default FormCard;
