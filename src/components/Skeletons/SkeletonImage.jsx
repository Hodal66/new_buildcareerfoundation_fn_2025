/**
 * SkeletonImage Component
 * Skeleton loader for image placeholders
 * Responsive and maintains aspect ratios
 */

/* eslint-disable react/prop-types */
const SkeletonImage = ({ className = "", aspectRatio = "aspect-video" }) => {
  return (
    <div
      className={`animate-pulse bg-gray-300 rounded ${aspectRatio} ${className}`}
    >
      <div className="w-full h-full flex items-center justify-center">
        <svg
          className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default SkeletonImage;
