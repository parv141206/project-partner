import { AuthContext } from "@/Contexts/UserContext";
import Link from "next/link";
import React, { useContext } from "react";

export default function Sidebar() {
  const user = useContext(AuthContext);
  return (
    <div className="sticky top-0 flex w-fit flex-col gap-3 rounded-xl border bg-gray-300/25 p-5 backdrop-blur-md dark:border-gray-600 dark:bg-gray-900/25">
      <div className="text-xl font-bold">
        Welcome, <br />{" "}
        <span className="text-indigo-500"> {user?.user?.username} </span>
      </div>
      <hr className="border-black" />
      <Link href="/admin" className="text-xl font-bold">
        <span>📚</span> Overview
      </Link>
      <Link href="/admin/pending" className="text-xl font-bold">
        <span>🟡</span> Pending Projects
      </Link>
      <Link href="/admin/completed" className="text-xl font-bold">
        <span>🟢</span> Completed Projects
      </Link>
    </div>
  );
}
