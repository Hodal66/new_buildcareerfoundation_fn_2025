/**
 * SkeletonActivityDetail Component
 * Specialized skeleton for activity detail pages
 * Responsive layout matching actual activity detail structure
 */

import SkeletonImage from './SkeletonImage';
import SkeletonText from './SkeletonText';

const SkeletonActivityDetail = () => {
  return (
    <div className="w-full animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Title skeleton */}
        <div className="mb-4 sm:mb-6">
          <div className="h-6 sm:h-8 lg:h-10 bg-gray-300 rounded w-3/4 max-w-2xl"></div>
        </div>

        {/* Image skeleton */}
        <div className="mb-6 sm:mb-8">
          <SkeletonImage className="w-full h-48 sm:h-64 md:h-80 lg:h-96" />
        </div>

        {/* Content skeleton */}
        <div className="space-y-4 sm:space-y-6">
          <SkeletonText lines={2} />
          <SkeletonText lines={4} />
          <SkeletonText lines={3} />
        </div>

        {/* Additional images grid skeleton */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <SkeletonImage className="w-full h-40 sm:h-48" />
          <SkeletonImage className="w-full h-40 sm:h-48" />
          <SkeletonImage className="w-full h-40 sm:h-48 hidden lg:block" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonActivityDetail;
