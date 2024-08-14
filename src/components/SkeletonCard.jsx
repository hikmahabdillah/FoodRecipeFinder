const SkeletonCard = () => {
  return (
    <div className="w-[350px] bg-white border border-gray-200 rounded-lg shadow animate-pulse dark:bg-gray-800 dark:border-gray-700">
      <div className="relative">
        <div className="rounded-t-lg max-w-lg w-full object-cover object-top h-64 bg-gray-300 dark:bg-gray-700"/>
        <div className="absolute top-3 left-3 h-6 w-24 bg-gray-300 dark:bg-gray-600 rounded-md"/>
      </div>
      <div className="p-5">
        <div className="h-8 w-3/4 bg-gray-300 dark:bg-gray-600 rounded mb-2"/>
        <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-600 rounded mb-4"/>
        <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded mb-2"/>
        <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded mb-2"/>
        <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded mb-4"/>
        <div className="h-10 w-32 bg-gray-300 dark:bg-gray-600 rounded"/>
      </div>
    </div>
  );
};

export default SkeletonCard;