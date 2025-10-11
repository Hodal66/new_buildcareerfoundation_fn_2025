/* eslint-disable react/prop-types */


const NumberStatus = ({imgVar, titleOfcard, numberData, isMoney}) => {
    return (
        // Responsive status card with adaptive width and padding
        // Mobile: w-full px-3, Tablet: px-4, Desktop: basis-[235px] px-6
        <div className="flex flex-col items-center justify-center text-center font-montiseramwa
          w-full px-3
          sm:px-4
          md:basis-[235px] md:px-6">
            {/* Image with responsive bottom padding: Mobile: pb-2, Tablet: pb-3, Desktop: pb-4 */}
            <div>
              <img src={`/${imgVar}`} alt="" className="
                pb-2
                sm:pb-3
                md:pb-4
                w-16 h-16
                sm:w-20 sm:h-20
                md:w-24 md:h-24" />
            </div>
            {/* Number display with responsive text size: Mobile: text-xl, Tablet: text-2xl, Desktop: text-normalSize */}
            {isMoney ? (
              <div className="
                text-xl
                sm:text-2xl
                md:text-normalSize">
                $ {numberData}
              </div>
            ) : (
              <div className="
                text-xl
                sm:text-2xl
                md:text-normalSize">
                {numberData}
              </div>
            )}
            {/* Title with responsive text size: Mobile: text-xs, Tablet: text-sm, Desktop: text-btnSize */}
            <div className="
              text-xs
              sm:text-sm
              md:text-btnSize
              mt-1">
              {titleOfcard}
            </div>
        </div>
    );
};

export default NumberStatus;