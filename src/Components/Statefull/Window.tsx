import React from "react";

export default function Window({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      id={id}
      className="flex flex-col rounded-xl border bg-white dark:border-gray-600 dark:bg-gray-900"
    >
      <div className="flex gap-3 border-b p-3 dark:border-gray-600">
        <div className="h-5 w-5 rounded-full bg-red-500"></div>
        <div className="h-5 w-5 rounded-full bg-yellow-500"></div>
        <div className="h-5 w-5 rounded-full bg-green-500"></div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
