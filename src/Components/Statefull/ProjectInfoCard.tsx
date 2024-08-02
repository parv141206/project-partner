import { ProjectInfo } from "@/types";
import React, { useEffect, useState } from "react";

export default function ProjectInfoCard({
  projectInfo,
  children,
}: {
  projectInfo: ProjectInfo;
  children?: React.ReactNode;
}) {
  const [bgColor, setBgColor] = useState<string>("");

  const getRandomBg = () => {
    const bg = [
      "bg-green-200/40 dark:bg-gray-900",
      "bg-blue-200/40 dark:bg-gray-900",
      "bg-indigo-200/40 dark:bg-gray-900",
      "bg-purple-200/40 dark:bg-gray-900",
    ];
    return bg[Math.floor(Math.random() * bg.length)];
  };

  useEffect(() => {
    setBgColor(getRandomBg());
  }, []);

  return (
    <div className={`rounded-lg p-5 ${bgColor}`}>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold">{projectInfo.projectTitle}</h3>
          <p className="flex items-center justify-center gap-3 text-lg">
            <div
              style={{ height: "10px", width: "10px" }}
              className={`rounded-full ${projectInfo.status === "completed" ? "bg-green-500" : "bg-yellow-500"}`}
            ></div>
            {projectInfo.status}
          </p>
        </div>
        <hr className="my-3 border-black" />
        <p className="text-lg font-light">{projectInfo.description}</p>
        <div className="flex">
          <p className="text-lg font-light">{projectInfo.subject}</p>
          <div className="mx-3">~</div>
          <p className="text-lg font-light">Sem {projectInfo.sem}</p>
        </div>
        {projectInfo.status === "completed" ? (
          <div>Access the code at {projectInfo.googleDriveLink}</div>
        ) : null}
        {children}
      </div>
    </div>
  );
}
