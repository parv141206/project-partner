"use client";
import Sidebar from "@/Components/Stateless/Admin/Sidebar";
import { AuthContext } from "@/Contexts/UserContext";
import React, { useContext, useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const user = useContext(AuthContext);
  const [greetings, setGreetings] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      setGreetings("Good Morning 😄");
    } else if (hour >= 12 && hour < 18) {
      setGreetings("Good Afternoon 😃");
    } else {
      setGreetings("Good Evening 🤖");
    }
  }, []);
  if (!user?.user || user.user.email !== "parv141206@gmail.com") {
    <div className="flex h-screen w-full items-center justify-center text-center text-3xl">
      Not authorized
    </div>;
  }
  return (
    <div className="flex">
      <div className="p-5">
        <Sidebar />
      </div>
      <div className="container mx-auto p-5">
        <h1 className="my-3 text-5xl">{greetings} Hi bhai, kaam ho jaye?</h1>

        {children}
      </div>
    </div>
  );
}
