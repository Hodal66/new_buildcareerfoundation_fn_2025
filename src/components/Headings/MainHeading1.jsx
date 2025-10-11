// eslint-disable-next-line react/prop-types
function MainHeading1({ Title, classNameProps}) {
  /* Responsive main heading with adaptive text size and padding across breakpoints */
  /* Mobile: text-2xl py-2, Tablet: text-3xl py-3, Desktop: text-4xl py-3, Large: text-5xl py-4 */
  return <div className={`
    text-2xl py-2
    sm:text-3xl sm:py-3
    md:text-4xl
    lg:text-5xl lg:py-4
    font-normal font-montiseramwa ${classNameProps}`}>
    {Title}
  </div>;
}

export default MainHeading1;
