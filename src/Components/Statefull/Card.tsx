import React, { ReactNode } from "react";

export default function Card({
  title,
  children,
  className,
  id,
}: {
  id?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
}) {
  let hr = "";
  if (title === undefined || title === null) {
    hr = "hidden";
  }
  return (
    <div
      id={id}
      className={`${className} flex flex-col gap-3 rounded-3xl bg-white p-5 text-start shadow-lg shadow-gray-200 dark:bg-gray-900 dark:shadow-gray-800`}
    >
      <div className="text-xl font-bold">{title}</div>
      <hr className={`${hr}`} />
      <div className="flex h-full flex-col items-center px-3 text-start">
        {children}
      </div>
    </div>
  );
}
