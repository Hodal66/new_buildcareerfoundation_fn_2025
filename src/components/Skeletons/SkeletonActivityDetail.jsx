/**
 * SkeletonActivityDetail Component
 * Specialized skeleton for activity detail pages
 * Responsive layout matching actual activity detail structure
 */

import SkeletonImage from './SkeletonImage';
import SkeletonText from './SkeletonText';

const SkeletonActivityDetail = () => {
  return (
    <div className="w-full max-w-5xl mx-auto animate-pulse font-Nunito">
      {/* Hero Skeleton */}
      <div className="bg-gray-200 h-[300px] w-full rounded-[40px] mb-12 flex flex-col items-center justify-center p-8">
        <div className="h-4 bg-gray-300 rounded-full w-24 mb-6"></div>
        <div className="h-12 bg-gray-300 rounded-2xl w-3/4 mb-6"></div>
        <div className="h-4 bg-gray-300 rounded-full w-48"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          {/* Visual Element Skeleton */}
          <div className="h-[400px] bg-gray-200 rounded-[40px] w-full"></div>
          
          {/* Content Block Skeleton */}
          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-slate-100 space-y-8">
            <div className="space-y-3">
              <div className="h-6 bg-gray-200 rounded-full w-full"></div>
              <div className="h-6 bg-gray-200 rounded-full w-5/6"></div>
            </div>
            
            <div className="space-y-6 pt-10">
              {[1, 2].map(i => (
                <div key={i} className="space-y-3">
                  <div className="h-8 bg-gray-200 rounded-xl w-1/3 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-2/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Skeleton */}
        <div className="lg:col-span-4 space-y-6">
          <div className="h-[250px] bg-gray-200 rounded-[40px] w-full"></div>
          <div className="h-[200px] bg-gray-200 rounded-[40px] w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonActivityDetail;
