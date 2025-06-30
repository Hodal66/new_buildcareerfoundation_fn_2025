// eslint-disable-next-line react/prop-types
function Heading2({Title,classNameProps}) {
    return (
      <header>
        <h2 className={`font-normal text-xl ${classNameProps}`}>{Title}</h2>
      </header>
    )
  }
  
  export default Heading2
  