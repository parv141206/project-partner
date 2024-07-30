import React from "react";
import Button from "./Button";

export default function PricingCard({
  id,
  className,
  title,
  description,
  features,
  price,
  children,
}: {
  id?: string;
  className?: string;
  title?: string;
  description?: string;
  features?: string[];
  price?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      id={id}
      className={`mx-auto ${className} flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white/25 p-6 text-center text-gray-900 shadow backdrop-blur-md dark:border-gray-600 dark:bg-gray-800/25 dark:text-white xl:p-8`}
    >
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>

      <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
        {description}
      </p>
      <div className="my-4 flex items-baseline justify-center">
        <span className="mr-2 text-5xl font-extrabold">{price}</span>
      </div>
      {/* List */}
      <ul role="list" className="mb-4 space-y-4 text-left">
        {features?.map((feature) => (
          <li key={feature} className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button title="Get started" />
    </div>
  );
}
