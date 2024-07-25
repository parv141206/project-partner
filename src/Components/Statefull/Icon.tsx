import Image from "next/image";
import React from "react";

export default function Icon({
  className,
  src,
}: {
  className?: string;
  src: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-white flex items-center justify-center dark:bg-gray-900 p-5 shadow-xl ${className}`}
    >
      <Image src={src} width={50} height={50} alt="icon" />
    </div>
  );
}
