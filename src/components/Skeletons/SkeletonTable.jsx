/**
 * SkeletonTable Component
 * Skeleton loading placeholder for table components
 * Responsive design with configurable number of rows
 */

/* eslint-disable react/prop-types */
const SkeletonTable = ({ rows = 5 }) => {
  return (
    <div className="w-full overflow-x-auto animate-pulse">
      {/* Table header skeleton */}
      <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 p-3 sm:p-4 bg-gray-200 rounded-t-lg mb-2">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="h-4 bg-gray-300 rounded hidden lg:block"></div>
        ))}
        {[...Array(4)].map((_, index) => (
          <div key={index} className="h-4 bg-gray-300 rounded md:block lg:hidden"></div>
        ))}
      </div>

      {/* Table rows skeleton */}
      <div className="space-y-2">
        {[...Array(rows)].map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 p-3 sm:p-4 bg-gray-100 rounded-lg"
          >
            {/* Mobile view: fewer columns */}
            <div className="h-4 bg-gray-300 rounded col-span-1"></div>
            <div className="h-4 bg-gray-300 rounded col-span-1 hidden sm:block"></div>
            <div className="h-4 bg-gray-300 rounded col-span-1 hidden md:block"></div>
            <div className="h-4 bg-gray-300 rounded col-span-1 hidden md:block"></div>
            <div className="h-4 bg-gray-300 rounded col-span-1 hidden lg:block"></div>
            <div className="h-4 bg-gray-300 rounded col-span-1 hidden lg:block"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonTable;
