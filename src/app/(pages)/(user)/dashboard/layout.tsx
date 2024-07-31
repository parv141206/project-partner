"use client";
import Sidebar from "@/Components/Stateless/User/Sidebar";
import { AuthContext } from "@/Contexts/UserContext";
import React, { useContext } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const user = useContext(AuthContext);

  if (!user?.user) {
    return <div>You are not logged in.</div>;
  }
  return (
    <div className="flex">
      <div className="p-5">
        <Sidebar />
      </div>
      <div className="container mx-auto p-5">
        {JSON.stringify(user)} {children}
      </div>
    </div>
  );
}
