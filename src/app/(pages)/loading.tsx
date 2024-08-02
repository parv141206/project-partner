import Skeleton from "@/Components/Stateless/Skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="loader"></div>
    </div>
  );
}
