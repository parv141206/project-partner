"use client";
import ProjectInfoCard from "@/Components/Statefull/ProjectInfoCard";
import Skeleton from "@/Components/Stateless/Skeleton";
import {
  fetchAllCompletedProjects,
  fetchAllPendingProjects,
} from "@/Firebase/Functions/Project";
import { ProjectInfo } from "@/types";
import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [projects, setProjects] = useState<ProjectInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const projects = await fetchAllCompletedProjects();
      console.log(projects);
      setProjects(projects);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-5 p-5">
      <div className="flex flex-col gap-3">
        <div className="my-3 text-3xl">Projects</div>
        {isLoading && <Skeleton />}
        {projects.length === 0 && <p>No projects yet!</p>}
        {projects.map((project) => (
          <div key={project.id}>
            {" "}
            <ProjectInfoCard projectInfo={project}></ProjectInfoCard>
          </div>
        ))}
      </div>
    </div>
  );
}
