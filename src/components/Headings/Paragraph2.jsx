// eslint-disable-next-line react/prop-types
function Paragraph2({ Title }) {
    /* Responsive paragraph with adaptive text size across breakpoints */
    /* Mobile: text-sm, Tablet: text-base, Desktop: text-base */
    return <p className="
      font-semibold
      text-sm
      sm:text-base">
      {Title}
    </p>;
  }
  
  export default Paragraph2;
  