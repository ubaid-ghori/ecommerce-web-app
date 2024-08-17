import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="w-full h-64 bg-gray-300 animate-pulse rounded-lg">
      <div className="w-full h-36 bg-gray-400 mb-4 rounded-t-lg"></div>
      <div className="px-4">
        <div className="w-3/4 h-4 bg-gray-400 mb-2 rounded"></div>
        <div className="w-1/2 h-4 bg-gray-400 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
