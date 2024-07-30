"use client";
import signUp, { signOutFromGoogle } from "@/Utils/signIn";
import { getApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import Image from "next/image";
import React from "react";

export default function page() {
  const _signOut = async () => {
    try {
      await signOutFromGoogle();
      console.log("Signed out");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center gap-10 p-10 text-black">
        <button className="btn text-xl" onClick={() => _signOut()}>
          Sign Out
        </button>
      </div>
    </>
  );
}
