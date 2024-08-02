"use client";
import ModalInput from "@/Components/Statefull/ModalInput";
import ProjectInfoCard from "@/Components/Statefull/ProjectInfoCard";
import Skeleton from "@/Components/Stateless/Skeleton";
import { AuthContext } from "@/Contexts/UserContext";
import {
  fetchAllProjects,
  fetchUsersProjects,
  markProjectAsCompleted,
} from "@/Firebase/Functions/Project";
import { ProjectInfo } from "@/types";
import { sendGoogleDriveLink } from "@/Utils/sendEmail";
import { TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

export default function AdminDashboard() {
  const [projects, setProjects] = useState<ProjectInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<
    string | undefined
  >("");
  const [googleDriveLink, setGoogleDriveLink] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const projects = await fetchAllProjects();
      console.log(projects);
      setProjects(projects);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  function handleProjectCompletion(projectId: string | undefined) {
    setSelectedProjectId(projectId);
    setIsOpen(true);
  }
  function sendProjectCompletedMail() {
    sendGoogleDriveLink("parv141206@gmail.com", googleDriveLink);
    markProjectAsCompleted(selectedProjectId!, googleDriveLink);
    alert("Email sent successfully!");
  }
  return (
    <div className="flex flex-col gap-5 p-5">
      <div className="flex flex-col gap-3">
        <div className="my-3 text-3xl">Projects</div>
        {isLoading && <Skeleton />}
        {projects.length === 0 && <p>No projects yet!</p>}
        {projects.map((project) => (
          <div key={project.id}>
            {" "}
            <ProjectInfoCard projectInfo={project}>
              {project.status === "pending" ? (
                <div className="flex justify-start">
                  <div
                    className="btn-green my-3 cursor-pointer"
                    onClick={() => handleProjectCompletion(project.id)}
                  >
                    Done!
                  </div>
                </div>
              ) : null}
            </ProjectInfoCard>
          </div>
        ))}
      </div>
      {isOpen && (
        <ModalInput isOpen={isOpen}>
          <h2 className="text-xl">Project ID:</h2>
          <p className="text-lg">{selectedProjectId}</p>

          <TextField
            label="Google Drive Link"
            variant="outlined"
            onChange={(e) => setGoogleDriveLink(e.target.value)}
          />
          <div className="flex items-start justify-start gap-3">
            <div className="btn-green" onClick={sendProjectCompletedMail}>
              Submit
            </div>
            <button className="btn" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </ModalInput>
      )}
    </div>
  );
}
