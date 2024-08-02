import SubjectCard from "@/Components/Statefull/SubjectCard";
import React from "react";

export default function page() {
  if (true) {
    return <div>Under Construction</div>;
  }
  return (
    <div className="container mx-auto p-5">
      <div className="my-5 text-5xl">We provide the following subjects</div>
      <div className="grid grid-cols-3 gap-5 p-5">
        <SubjectCard
          subjectName="JavaScript"
          subjectImage="js.png"
          subjectDescription="JS"
        />
      </div>
    </div>
  );
}
