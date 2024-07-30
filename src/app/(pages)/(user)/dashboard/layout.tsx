"use client";
import { AuthContext } from "@/Contexts/UserContext";
import React, { useContext } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const user = useContext(AuthContext);

  if (!user) {
    return <div>You are not logged in.</div>;
  }
  return (
    <>
      {JSON.stringify(user)} {children}
    </>
  );
}
