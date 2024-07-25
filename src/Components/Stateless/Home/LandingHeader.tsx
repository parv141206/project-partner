import React from "react";
import HomePageAnimation from "./HomePageAnimation";

export default function LandingHeader() {
  return (
    <div className="relative flex min-h-[50vh] w-full items-center justify-center md:min-h-[80vh]">
      {/* <HomePageAnimation /> */}
      <div className="flex w-2/3 flex-col justify-between gap-3 text-center">
        <div className="font-comico text-5xl">Project Partner!</div>
        <div className="text-xl">
          Just give us what to build, we will build it for you!
        </div>
      </div>
    </div>
  );
}
