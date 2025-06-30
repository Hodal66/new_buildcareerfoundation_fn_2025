/* eslint-disable react/prop-types */
const CardOfImpact = ({MyTitle,Mysource, key,MyImage,ImageAlt,MyParagraphs}) => {
  return (
    <div className="bg-gray-500 grid grid-cols-2 rounded-roundedBox" key={key}>
      <div className="p-8">
        <div className="text-normalSize font-medium text-thirdSectionBg mb-3">
          {/* Medical Research */}
          {MyTitle}
        </div>
        <div className="flex mt-4">
       {
        
       }
      </div>
      <div className="">
        <img
          src={MyImage}
          alt={ImageAlt}
          className=" object-cover rounded-t-roundedBox phone:rounded-none phone:rounded-r-roundedBox w-full h-full"
        />
      </div>
    </div>
    </div>
  );
};

export default CardOfImpact;
