/* eslint-disable react/prop-types */


const CustomAlert = ({ message, onClose }) => {
  return (
    // Full screen overlay with backdrop
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50
      px-4">
      {/* Alert box with responsive padding and text: Mobile: p-4 text-base, Tablet: p-5 text-lg, Desktop: p-6 text-lg */}
      <div className="bg-white rounded-xl shadow-lg text-center
        w-[90%] max-w-sm
        sm:max-w-md
        p-4
        sm:p-5
        md:p-6">
        {/* Message with responsive text size: Mobile: text-base, Tablet: text-lg, Desktop: text-lg */}
        <h2 className="font-semibold
          text-base mb-3
          sm:text-lg sm:mb-4
          md:text-lg">
          {message}
        </h2>
        {/* OK button with responsive padding: Mobile: px-4 py-1.5, Tablet: px-4 py-2, Desktop: px-4 py-2 */}
        <button
          onClick={onClose}
          className="bg-blue-500 text-white rounded hover:bg-blue-600
            transition-colors duration-200
            mt-1.5 px-4 py-1.5 text-sm
            sm:mt-2 sm:px-4 sm:py-2 sm:text-base">
          OK
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
