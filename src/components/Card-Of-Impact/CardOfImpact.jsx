/* eslint-disable react/prop-types */
const CardOfImpact = ({MyTitle,Mysource, key,MyImage,ImageAlt,MyParagraphs}) => {
  return (
    <div>
      {/* Responsive grid card: Mobile: 1 column, Tablet: 2 columns */}
      <div className="bg-gray-500 rounded-roundedBox
        grid grid-cols-1
        sm:grid-cols-2" key={key}>
        {/* Content section with responsive padding: Mobile: p-4, Tablet: p-6, Desktop: p-8 */}
        <div className="
          p-4
          sm:p-6
          md:p-8">
          {/* Title with responsive text size: Mobile: text-base, Tablet: text-lg, Desktop: text-normalSize */}
          <div className="font-medium text-thirdSectionBg mb-3
            text-base
            sm:text-lg
            md:text-normalSize">
            {/* Medical Research */}
            {MyTitle}
          </div>
          <div className="flex
            mt-2
            sm:mt-3
            md:mt-4">
         {

         }
        </div>
        </div>
        {/* Image container - responsive on mobile: full width at top, on tablet+: right side */}
        <div className="">
          <img
            src={MyImage}
            alt={ImageAlt}
            className="object-cover w-full h-full
              rounded-t-roundedBox
              sm:rounded-none sm:rounded-r-roundedBox"
          />
        </div>
      </div>
    </div>
  );
};

export default CardOfImpact;
