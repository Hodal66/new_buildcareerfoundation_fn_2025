// import React from "react";

const FooterDashboard = () => {
  return (
    // Responsive footer with adaptive text size and padding
    <footer
      className="bg-adminFooterBackground font-Montserrat font-medium
           col-start-1 sm:col-start-3 md:col-start-4 lg:col-start-3
           col-end-13 row-start-12 row-end-13
           flex justify-center items-center
           py-2
           sm:py-3
           md:py-4"
    >
      {/* Text with responsive size: Mobile: text-[10px], Tablet: text-xs, Desktop: text-sm */}
      <p className="text-white
        text-[10px]
        sm:text-xs
        md:text-sm
        px-2 text-center">
        Build Career 2023 All rights Reserved. Designed by BCF
      </p>
    </footer>
  );
};

export default FooterDashboard;
