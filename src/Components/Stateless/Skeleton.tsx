import React from "react";

export default function Skeleton() {
  return (
    <div className="space-y-4">
      <div className="h-20 w-full animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-10 w-3/4 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-10 w-2/3 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-10 w-1/3 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700"></div>
    </div>
  );
}
