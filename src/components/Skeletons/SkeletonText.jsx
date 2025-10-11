/**
 * SkeletonText Component
 * Flexible skeleton loader for text content
 * Supports different sizes and line counts
 */

/* eslint-disable react/prop-types */
const SkeletonText = ({ lines = 3, className = "" }) => {
  return (
    <div className={`animate-pulse space-y-2 sm:space-y-3 ${className}`}>
      {[...Array(lines)].map((_, index) => (
        <div
          key={index}
          className={`h-3 sm:h-4 bg-gray-300 rounded ${
            index === lines - 1 ? 'w-4/5' : 'w-full'
          }`}
        ></div>
      ))}
    </div>
  );
};

export default SkeletonText;
