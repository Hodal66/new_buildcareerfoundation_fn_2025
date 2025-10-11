/**
 * SkeletonGrid Component
 * Grid layout skeleton for card-based layouts
 * Fully responsive with configurable item count
 */

/* eslint-disable react/prop-types */
import SkeletonCard from './SkeletonCard';

const SkeletonGrid = ({ items = 8 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full">
      {[...Array(items)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default SkeletonGrid;
