// eslint-disable-next-line react/prop-types
function Heading1({ Title,classNameProps }) {
  return (
    <header className={`${classNameProps} py-2 sm:py-3 md:py-4`}>
      {/* Responsive heading with adaptive text size across breakpoints */}
      {/* Mobile: text-xl, Tablet: text-2xl, Desktop: text-3xl */}
      <h1 className={`font-normal
        text-xl
        sm:text-2xl
        md:text-3xl
        flex justify-center items-center`}>
        {Title}
      </h1>
    </header>
  );
}

export default Heading1;
