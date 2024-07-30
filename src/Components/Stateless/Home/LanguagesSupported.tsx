import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function LanguagesSupported() {
  return (
    <div className="container mx-auto flex flex-col p-10">
      <div className="my-10 text-center font-comico text-5xl">
        &quot;What can you build?&quot;
      </div>

      <div className="text-center text-3xl">Pretty much everything 🐱‍🏍</div>
      <div className="text-center text-3xl">
        All subjects including C, C++, Java, Python, JavaScript/ TypeScript ,
        PhP...
        <br />
        <Link
          href="/subjects"
          className="flex items-center justify-center gap-3 text-center text-blue-500"
        >
          and more <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
