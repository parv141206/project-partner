"use client";
import { AuthContext } from "@/Contexts/UserContext";
import useTheme from "@/Hooks/useTheme";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaSun, FaMoon } from "react-icons/fa";
import Dropdown from "../Statefull/Dropdown";
import { signOutFromGoogle } from "@/Utils/signIn";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const links = ["Pricing", "Subjects"];
  const user = useContext(AuthContext);

  return (
    <>
      <div
        className={`sticky top-3 z-50 mx-auto flex w-3/4 items-center justify-center rounded-3xl border border-gray-400/50 p-3 backdrop-blur-md ${theme === "dark" ? "bg-gray-900/20" : "bg-white/20"}`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Left Section */}
          <Link href="/" className="flex-1 text-xl font-bold">
            /ProjectPartner
          </Link>

          {/* Center Links */}
          <div className="hidden flex-1 justify-center gap-4 md:flex">
            {links.map((link) => (
              <Link
                href={`/${link.toLowerCase()}`}
                key={link}
                className="text-xl font-bold"
              >
                {link}
              </Link>
            ))}
            {user?.user ? (
              <>
                <Link className="text-xl font-bold" href="/dashboard">
                  Dashboard
                </Link>
                <Link className="text-xl font-bold" href="/new-project">
                  New
                </Link>
              </>
            ) : null}
          </div>

          {/* Right Section */}
          <div className="flex flex-1 items-center justify-end gap-3">
            <CiMenuFries
              onClick={() => setIsExpanded(!isExpanded)}
              className={`text-3xl transition-all md:hidden ${isExpanded ? "rotate-90" : ""}`}
            />
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden p-2 md:block"
            >
              {theme === "dark" ? (
                <FaSun className="text-xl text-gray-200" />
              ) : (
                <FaMoon className="text-xl text-gray-800" />
              )}
            </button>
            {user?.user ? (
              <span className="hidden md:block">
                <Dropdown title={user.user?.username}>
                  <Link href="/profile">Profile</Link>
                  <button
                    onClick={() => {
                      signOutFromGoogle();
                    }}
                  >
                    SignOut
                  </button>
                </Dropdown>
              </span>
            ) : (
              <Link className="hidden md:block" href="/signin">
                SignIn
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sticky items-center justify-between rounded-3xl border border-gray-400/50 p-3 px-5 backdrop-blur-md transition-all ${theme === "dark" ? "bg-gray-900/20" : "bg-white/20"} top-20 z-50 mx-auto flex w-3/4 flex-col md:hidden ${isExpanded ? "block" : "hidden"}`}
      >
        {links.map((link) => (
          <Link
            href={`/${link.toLowerCase()}`}
            key={link}
            className="text-xl font-bold"
          >
            {link}
          </Link>
        ))}
        {user?.user ? (
          <>
            <Link className="text-xl font-bold" href="/dashboard">
              Dashboard
            </Link>

            <Link className="text-xl font-bold" href="/new-project">
              New
            </Link>
          </>
        ) : null}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2"
        >
          {theme === "dark" ? (
            <FaSun className="text-xl text-gray-200" />
          ) : (
            <FaMoon className="text-xl text-gray-800" />
          )}
        </button>
        {user?.user ? (
          <span className="block md:hidden">
            <Dropdown title={user.user?.username}>
              <Link href="/profile">Profile</Link>
              <button
                onClick={() => {
                  signOutFromGoogle();
                }}
              >
                SignOut
              </button>
            </Dropdown>
          </span>
        ) : (
          <Link className="block md:hidden" href="/signin">
            SignIn
          </Link>
        )}
      </div>
    </>
  );
}
