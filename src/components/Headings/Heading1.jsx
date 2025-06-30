// eslint-disable-next-line react/prop-types
function Heading1({ Title,classNameProps }) {
  return (
    <header className={`${classNameProps} py-4`}>
      <h1 className={`font-normal text-3xl flex justify-center items-center `}>
        {Title}
      </h1>
    </header>
  );
}

export default Heading1;
