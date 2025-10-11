// eslint-disable-next-line react/prop-types
function BtnComponentBlue({title,icon,className}) {
  return (
    <div>
        {/* Responsive button with adaptive padding and text size across breakpoints */}
        {/* Mobile (sm): px-4 py-1.5, text-sm */}
        {/* Tablet (md): px-6 py-2, text-base */}
        {/* Desktop (lg+): px-8 py-2, text-base */}
        <button className={`${className} border rounded-full cursor-pointer
          px-4 py-1.5 text-sm
          sm:px-6 sm:py-2 sm:text-base
          md:px-8 md:py-2
          font-semibold bg-grad1 hover:bg-white hover:text-fullBlackPhant
          transition-all duration-200`}>
           {title} <span>{icon}</span>
        </button>
    </div>
  )
}

export default BtnComponentBlue
