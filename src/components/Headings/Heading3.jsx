// eslint-disable-next-line react/prop-types
function Heading3({Title}) {
    return (
      <header>
        {/* Responsive h3 heading with adaptive text size and bottom padding */}
        {/* Mobile: text-base pb-2, Tablet: text-lg pb-3, Desktop: text-xl pb-4 */}
        <h3 className="
          text-base pb-2
          sm:text-lg sm:pb-3
          md:text-xl md:pb-4
          font-medium">
          {Title}
        </h3>
      </header>
    )
  }
  
  export default Heading3
  