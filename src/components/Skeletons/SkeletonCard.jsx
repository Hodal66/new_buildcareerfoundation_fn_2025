/**
 * SkeletonCard Component
 * Reusable skeleton loading placeholder for card components
 * Maintains exact layout spacing of actual card content
 */

const SkeletonCard = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg shadow animate-pulse">
        {/* Image skeleton with responsive height: Mobile: 200px, Tablet: 220px, Desktop: 250px */}
        <div className="rounded-t-lg w-full bg-gray-300
          h-[200px]
          sm:h-[220px]
          md:h-[240px]
          lg:h-[250px]"></div>

        {/* Content skeleton with responsive padding: Mobile: py-2 px-2, Tablet: py-3 px-2.5, Desktop: py-4 px-3 */}
        <div className="space-y-2 sm:space-y-2.5 md:space-y-3
          py-2 px-2
          sm:py-3 sm:px-2.5
          md:py-4 md:px-3">
          {/* Title skeleton with responsive height: Mobile: h-5, Tablet: h-5.5, Desktop: h-6 */}
          <div className="bg-gray-300 rounded w-3/4
            h-5
            sm:h-5.5
            md:h-6"></div>

          {/* Content lines skeleton with responsive spacing and height */}
          <div className="space-y-1.5 sm:space-y-2">
            <div className="bg-gray-300 rounded w-full
              h-3
              sm:h-3.5
              md:h-4"></div>
            <div className="bg-gray-300 rounded w-5/6
              h-3
              sm:h-3.5
              md:h-4"></div>
          </div>

          {/* Button skeleton with responsive height and width */}
          <div className="pt-1.5 sm:pt-2">
            <div className="bg-gray-300 rounded-full mx-auto
              h-8 w-28
              sm:h-9 sm:w-30
              md:h-10 md:w-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
