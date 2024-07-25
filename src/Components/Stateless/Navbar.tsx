import useTheme from "@/Hooks/useTheme";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const links = ["Home", "Pricing", "Subjects"];
  return (
    <>
      <div
        className={`sticky top-3 z-50 mx-auto w-3/4 rounded-3xl border border-gray-400/50 p-3 px-5 backdrop-blur-md ${theme === "dark" ? "bg-gray-900/20" : "bg-white/20"}`}
      >
        <div className="flex items-center justify-between">
          <span className="px-3 text-3xl">/</span>
          <div
            className={`hidden flex-col items-center justify-between gap-3 md:flex md:flex-row`}
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
          </div>
          <CiMenuFries
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-3xl transition-all md:hidden ${isExpanded === true ? "rotate-90" : ""}`}
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
        </div>
      </div>
      <div
        className={`sticky items-center justify-between rounded-3xl border border-gray-400/50 p-3 px-5 backdrop-blur-md transition-all ${theme === "dark" ? "bg-gray-900/20" : "bg-white/20"} top-20 z-50 mx-auto flex w-3/4 flex-col md:hidden ${isExpanded === true ? "block" : "hidden"}`}
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
      </div>
    </>
  );
}
