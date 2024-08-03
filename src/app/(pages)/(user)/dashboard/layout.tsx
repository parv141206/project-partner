"use client";
import Sidebar from "@/Components/Stateless/User/Sidebar";
import { AuthContext } from "@/Contexts/UserContext";
import React, { useContext, useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const user = useContext(AuthContext);
  const [greetings, setGreetings] = useState("");
  useEffect(() => {
    // getting greetings based on time
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      setGreetings("Good Morning 😄");
    } else if (hour >= 12 && hour < 18) {
      setGreetings("Good Afternoon 😃");
    } else {
      setGreetings("Good Evening 🤖");
    }
  }, []);
  if (!user?.user) {
    return (
      <div className="flex h-screen w-full items-center justify-center text-center text-3xl">
        You are not logged in.
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="p-5">
        <Sidebar />
      </div>
      <div className="container mx-auto p-5">
        <div className="my-5 text-5xl">{greetings}</div>
        {children}
      </div>
    </div>
  );
}
