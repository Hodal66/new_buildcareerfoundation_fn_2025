// eslint-disable-next-line react/prop-types
function Paragraph1({ Title,classNameProps }) {
  /* Responsive paragraph with adaptive text size and line height across breakpoints */
  /* Mobile: text-sm leading-relaxed, Tablet: text-base, Desktop: text-base leading-relaxed */
  return <p className={`${classNameProps}
    font-medium font-montiseramwa
    text-sm leading-relaxed
    sm:text-base
    md:text-base
    text-blackPhant text-justify`}>
    {Title}
  </p>;
}

export default Paragraph1;
