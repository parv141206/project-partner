"use client";
import React, { useContext, useState } from "react";
import { TextField } from "@mui/material";
import useTheme from "@/Hooks/useTheme";
import PricingCard from "@/Components/Statefull/PricingCard";
import { motion } from "framer-motion";
import { ProjectInfo } from "@/types";
import Modal from "@/Components/Statefull/Modal";
import { addNewProject } from "@/Firebase/Functions/Project";
import { AuthContext } from "@/Contexts/UserContext";
export default function AddProject() {
  const user = useContext(AuthContext);

  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sem, setSem] = useState("");
  const [plan, setPlan] = useState("Starter");
  const [collegeName, setCollegeName] = useState("");
  const [customizations, setCustomizations] = useState("");
  const [teamInfo, setTeamInfo] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmitForStep1 = () => {
    // Validate required fields for Step 1
    if (!name || !email || !subject || !projectTitle || !description || !sem) {
      setErrorMessage("Please fill in all required fields!");
      setIsOpen(true);
      return;
    }
    setStep(2);
  };

  const selectPlan = (plan: string) => {
    setPlan(plan);
    setStep(3);
  };

  const handleFinalSubmit = async () => {
    // Validate all fields before final submission
    if (!name || !email || !projectTitle || !description || !sem) {
      setErrorMessage(
        "Please fill in all required fields: Name, Email, Project Title, Description, Semester, and College Name.",
      );
      setIsOpen(true);
      return;
    } else {
      if (
        (plan === "dedicated" || plan === "pro") &&
        (!collegeName || !customizations || !teamInfo)
      ) {
        setErrorMessage(
          "Please fill in all required fields: Name, Email, Project Title, Description, Semester, and College Name.",
        );
        setIsOpen(true);
        return;
      }
    }
    setErrorMessage("Loading");
    setStep(5);
    const data: ProjectInfo = {
      name,
      email: user?.user?.email!,
      subject,
      projectTitle,
      description,
      sem,
      plan,
      collegeName,
      customizations,
      teamInfo,
      status: "pending",
      googleDriveLink: "",
    };

    console.log(data);
    const res = await addNewProject(data);
    if (res) {
      setErrorMessage(
        "We got it! Your project has been submitted successfully! You will receive updates on it soon.",
      );
      setStep(5);
    }
    console.log(res);
  };

  const { theme } = useTheme();
  if (!user?.user) {
    return (
      <div className="flex h-screen w-full items-center justify-center text-center text-3xl">
        You are not logged in.
      </div>
    );
  }
  return (
    <div
      className={`flex flex-col items-center justify-center p-10 text-start`}
    >
      <div
        className={`text-5xl ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        New Project
      </div>
      <hr className="my-7 w-full border border-gray-400" />
      {step === 1 && (
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputLabelProps={{
                style: { color: theme === "dark" ? "white" : "black" },
              }}
              InputProps={{
                style: { color: theme === "dark" ? "white" : "black" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme === "dark" ? "white" : "black",
                  },
                  "&:hover fieldset": {
                    borderColor: theme === "dark" ? "white" : "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme === "dark" ? "white" : "black",
                  },
                },
              }}
            />
          </div>
          <div className="flex flex-col">
            {/* <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{
                style: { color: theme === "dark" ? "white" : "black" },
              }}
              InputProps={{
                style: { color: theme === "dark" ? "white" : "black" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme === "dark" ? "white" : "black",
                  },
                  "&:hover fieldset": {
                    borderColor: theme === "dark" ? "white" : "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme === "dark" ? "white" : "black",
                  },
                },
              }}
            /> */}
          </div>
          <div className="flex flex-col">
            <TextField
              id="semester"
              label="Semester"
              variant="outlined"
              value={sem}
              onChange={(e) => setSem(e.target.value)}
              InputLabelProps={{
                style: { color: theme === "dark" ? "white" : "black" },
              }}
              InputProps={{
                style: { color: theme === "dark" ? "white" : "black" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme === "dark" ? "white" : "black",
                  },
                  "&:hover fieldset": {
                    borderColor: theme === "dark" ? "white" : "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme === "dark" ? "white" : "black",
                  },
                },
              }}
            />
          </div>
          <div className="flex flex-col">
            <TextField
              id="subject"
              label="Subject"
              variant="outlined"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              InputLabelProps={{
                style: { color: theme === "dark" ? "white" : "black" },
              }}
              InputProps={{
                style: { color: theme === "dark" ? "white" : "black" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme === "dark" ? "white" : "black",
                  },
                  "&:hover fieldset": {
                    borderColor: theme === "dark" ? "white" : "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme === "dark" ? "white" : "black",
                  },
                },
              }}
            />
          </div>
          <div className="flex flex-col">
            <TextField
              id="projectTitle"
              label="Project Title"
              variant="outlined"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              InputLabelProps={{
                style: { color: theme === "dark" ? "white" : "black" },
              }}
              InputProps={{
                style: { color: theme === "dark" ? "white" : "black" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme === "dark" ? "white" : "black",
                  },
                  "&:hover fieldset": {
                    borderColor: theme === "dark" ? "white" : "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme === "dark" ? "white" : "black",
                  },
                },
              }}
            />
          </div>
          <div className="col-span-1 flex flex-col md:col-span-2">
            <textarea
              placeholder="Project Description"
              className={`w-full rounded-lg border border-gray-600 bg-transparent p-3 ${theme === "dark" ? "text-white" : "text-black"}`}
              rows={10}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="col-span-1 flex flex-col md:col-span-2">
            <button
              className="btn rounded-lg p-2 text-white"
              onClick={handleSubmitForStep1}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-3xl">Select a plan</div>
            <div className="grid grid-cols-1 items-center gap-5 p-5 md:w-3/4 md:grid-cols-3">
              {[
                {
                  title: "Starter",
                  price: "100₹",
                  description:
                    "Best for small projects which need to be done in a short time",
                  features: [
                    "Complete Code",
                    "Fully documented",
                    "Delivered withing 24 hours!",
                  ],
                  action: (
                    <button
                      className="btn"
                      onClick={() => selectPlan("starter")}
                    >
                      Select
                    </button>
                  ),
                },
                {
                  title: "Pro",
                  price: "200₹",
                  description: "For all kinds of projects",
                  features: [
                    "Complete Code",
                    "Fully documented",
                    "Delivered within 8 hours!",
                    "Highly Customizable",
                    "We provide full documentation according to your college!",
                    "Added support for PPTs, PDFs, etc.",
                  ],
                  action: (
                    <button className="btn" onClick={() => selectPlan("pro")}>
                      Select
                    </button>
                  ),
                },
                {
                  title: "Dedicated",
                  price: "150₹",
                  description: "Best for larger projects",
                  features: [
                    "Complete Code",
                    "Fully documented",
                    "Delivered withing 24 hours!",
                    "Highly Customizable",
                    "We provide full documentation according to your college!",
                  ],
                  action: (
                    <button
                      className="btn"
                      onClick={() => selectPlan("dedicated")}
                    >
                      Select
                    </button>
                  ),
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 100 }}
                  whileInView={{ x: 0 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <PricingCard
                    title={card.title}
                    price={card.price}
                    description={card.description}
                    features={card.features}
                    action={card.action}
                  />
                </motion.div>
              ))}
            </div>
            <button className="btn" onClick={() => setStep(1)}>
              Previous
            </button>
          </div>
        </div>
      )}

      {step === 3 &&
        (plan === "starter" ? (
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="text-5xl">Are you ready?</div>
            <button className="btn" onClick={() => setStep(4)}>
              Submit
            </button>
          </div>
        ) : plan === "pro" || plan === "dedicated" ? (
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="text-xl">
              Following information will be kept confidential
            </div>
            <textarea
              onChange={(e) => setCustomizations(e.target.value)}
              name="customizations"
              id="customizations"
              rows={5}
              placeholder="Any special customizations you want?"
              className="rounded-lg border border-gray-600 bg-transparent p-3"
            ></textarea>
            <TextField
              id="collegeName"
              label="College name"
              variant="outlined"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              InputLabelProps={{
                style: { color: theme === "dark" ? "white" : "black" },
              }}
              InputProps={{
                style: { color: theme === "dark" ? "white" : "black" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme === "dark" ? "white" : "black",
                  },
                  "&:hover fieldset": {
                    borderColor: theme === "dark" ? "white" : "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme === "dark" ? "white" : "black",
                  },
                },
              }}
            />
            <div className="text-blue-600 dark:text-blue-300">
              The College name provided above will be used to create a report
              for you, based on your college. <br /> Feel free to WhatsApp us on
              9601465697 if you have any queries, or want to customize format.
            </div>
            {/* <div className="text-center">
              For the report, <br /> kindly send a sample of report you want on
              9601465697 along with your name and email.
            </div> */}
            <textarea
              name="team_info"
              id="team_info"
              rows={5}
              cols={45}
              onChange={(e) => setTeamInfo(e.target.value)}
              placeholder="Information about your team. Please provide enrollment number, name and class. Also provide information regarding your mentor/project head teacher."
              className="rounded-lg border border-gray-600 bg-transparent p-3"
            ></textarea>
            <div className="text-blue-600 dark:text-blue-300">
              This information will also be used in the report
            </div>
            <div className="flex gap-3">
              <button className="btn" onClick={() => setStep(2)}>
                Previous
              </button>
              <button className="btn" onClick={() => setStep(4)}>
                Submit
              </button>
            </div>
          </div>
        ) : null)}
      {step === 4 && (
        <>
          <div className="mb-4 text-center">
            <h2 className="text-lg font-semibold">
              Please check the following details...
            </h2>
          </div>
          <div className="space-y-2">
            <div className="flex justify-start gap-5">
              <span className="font-medium">Name:</span>
              <span>{name}</span>
            </div>
            <div className="flex justify-start gap-5">
              <span className="font-medium">Email:</span>
              <span>{email}</span>
            </div>
            <div className="flex justify-start gap-5">
              <span className="font-medium">Subject:</span>
              <span>{subject}</span>
            </div>
            <div className="flex justify-start gap-5">
              <span className="font-medium">Project Title:</span>
              <span>{projectTitle}</span>
            </div>
            <div className="flex justify-start gap-5">
              <span className="font-medium">Description:</span>
              <span>{description}</span>
            </div>
            <div className="flex justify-start gap-5">
              <span className="font-medium">Semester:</span>
              <span>{sem}</span>
            </div>
            <div className="flex justify-start gap-5">
              <span className="font-medium">Plan:</span>
              <span>{plan}</span>
            </div>
            {(plan === "dedicated" || plan === "pro") && (
              <>
                <div className="flex justify-start gap-5">
                  <span className="font-medium">College Name:</span>
                  <span>{collegeName}</span>
                </div>
                <div className="flex justify-start gap-5">
                  <span className="font-medium">Customizations:</span>
                  <span>{customizations}</span>
                </div>
                <div className="flex justify-start gap-5">
                  <span className="font-medium">Team Info:</span>
                  <span>{teamInfo}</span>
                </div>
              </>
            )}
          </div>
          <div className="mt-4 flex justify-start gap-5">
            <button
              className="btn rounded bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400"
              onClick={() => setStep(3)}
            >
              Previous
            </button>
            <button
              className="btn rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              onClick={handleFinalSubmit}
            >
              Submit
            </button>
          </div>
        </>
      )}
      {step === 5 && (
        <Modal isOpen={step === 5} title="Thank You!">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="text-center">{errorMessage}</div>
            <button
              className="btn"
              onClick={() => {
                setStep(1);
                setIsOpen(false);
              }}
            >
              Close
            </button>
          </div>
        </Modal>
      )}
      <Modal isOpen={isOpen} title={errorMessage}>
        <button className="btn" onClick={() => setIsOpen(false)}>
          Close
        </button>
      </Modal>
    </div>
  );
}
