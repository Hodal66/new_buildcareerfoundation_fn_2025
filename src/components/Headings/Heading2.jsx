// eslint-disable-next-line react/prop-types
function Heading2({Title,classNameProps}) {
    return (
      <header>
        {/* Responsive h2 heading with adaptive text size across breakpoints */}
        {/* Mobile: text-lg, Tablet: text-xl, Desktop: text-xl */}
        <h2 className={`font-normal
          text-lg
          sm:text-xl
          ${classNameProps}`}>
          {Title}
        </h2>
      </header>
    )
  }
  
  export default Heading2
  