// eslint-disable-next-line react/prop-types
function BtnComponentBlue({title,icon,className}) {
  return (
    <div>
        <button className={`${className} border rounded-full cursor-pointer px-8 py-2 font-semibold bg-grad1 hover:bg-white hover:text-fullBlackPhant`}>
           {title} <span>{icon}</span>
        </button>
    </div>
  )
}

export default BtnComponentBlue
