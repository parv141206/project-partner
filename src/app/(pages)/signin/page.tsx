"use client";
import { AuthContext } from "@/Contexts/UserContext";
import signUp from "@/Utils/signIn";
import Image from "next/image";
import React, { useContext } from "react";

export default function SignIn() {
  const signIn = async () => {
    try {
      console.log("Clicked");
      await signUp();
    } catch (error) {
      console.error(error);
    }
  };
  const user = useContext(AuthContext);

  if (user) {
    return (
      <div className="flex w-full items-center justify-center py-16 text-5xl">
        You are already logged in 🤗
      </div>
    );
  }
  return (
    <>
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center gap-10 p-10">
        <div className="text-3xl">Don&apos;t worry,we dont sell data! </div>
        <button className="btn text-xl" onClick={() => signIn()}>
          Sign In With Google
        </button>
        {/* <form action="" className="flex flex-col gap-1 bg-cover bg-center p-16">
          <div></div>
          <div className="text-center text-3xl">Welcome back!</div>
          <hr className="my-3 border-black" />
          <label htmlFor="username">Your sweet name</label>
          <input className="input" type="text" />
          <label htmlFor="email">Email</label>
          <input className="input" type="text" />
          <label htmlFor="password">Password</label>
          <input className="input" type="text" />
          <button className="btn my-3 border border-black bg-white text-xl">
            Sign In
          </button>
          <hr className="my-3 border-black" />

          <div className="text-center text-xl">New around here?</div>
          <button className="btn my-3 border border-black bg-white text-xl">
            Sign Up
          </button>
        </form> */}
      </div>
    </>
  );
}
