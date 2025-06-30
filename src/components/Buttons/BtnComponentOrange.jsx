// eslint-disable-next-line react/prop-types
function BtnComponentOrange({title,icon,className}) {
  return (
    <div>
        <button className={`${className} border hover:text-white rounded-full font-semibold hover:bg-thankYouColor px-8 py-2 bg-white text-fullBlackPhant`}>
           {title} <span>{icon}</span>
        </button>
    </div>
  )
}

export default BtnComponentOrange
