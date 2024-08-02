"use client";
import ProjectInfoCard from "@/Components/Statefull/ProjectInfoCard";
import Skeleton from "@/Components/Stateless/Skeleton";
import { AuthContext } from "@/Contexts/UserContext";
import {
  fetchCompletedProjects,
  fetchUsersProjects,
} from "@/Firebase/Functions/Project";
import React, { useContext, useEffect, useState } from "react";

export default function Overview() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const user = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      console.log(user?.user?.email);
      const projects: any = await fetchCompletedProjects(user?.user?.email!);
      console.log(projects);
      setProjects(projects);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      {
        <div>
          <div className="my-3 text-3xl">Projects</div>
          {isLoading && (
            <div>
              <Skeleton />
            </div>
          )}
          {projects.length === 0 && <p>No projects yet!</p>}

          {projects.map((project: any) => (
            <div key={project.projectTitle}>
              <ProjectInfoCard projectInfo={project} />
            </div>
          ))}
        </div>
      }
    </div>
  );
}
