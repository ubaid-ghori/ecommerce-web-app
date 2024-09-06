import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const SkeletonCard = () => {
  return (
    <div className="w-full h-full lg:px-20 p-4 pt-20">
       <Skeleton height={40} width={`60%`} className="mb-4" />
       <Skeleton count={5} height={25} className="mb-2" />
    </div>
  );
};

export default SkeletonCard;
