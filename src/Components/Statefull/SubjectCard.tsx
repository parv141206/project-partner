import Image from "next/image";
import React from "react";

export default function SubjectCard({
  subjectName,
  subjectImage,
  subjectDescription,
}: {
  subjectName: string;
  subjectImage: string;
  subjectDescription: string;
}) {
  return (
    <div>
      <div className="relative flex flex-col rounded-3xl border bg-white/25 p-5 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900">
        {/* Absolute Image with Fade Effect */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <Image
            src={`/images/subjects/${subjectImage}`}
            alt="Subject Image"
            layout="fill" // Fill the parent container
            objectFit="cover" // Cover the entire area
            objectPosition="center" // Center the image
            className="transition-opacity duration-500 ease-in-out" // Optional transition
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-black" />{" "}
          {/* Gradient overlay */}
        </div>

        <div className="relative z-10 flex flex-col gap-3">
          <div className="text-3xl">{subjectName}</div>
          <p>{subjectDescription}</p>
        </div>
      </div>
    </div>
  );
}
