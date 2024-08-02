import React from "react";

export default function ModalInput({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) {
  return (
    <div
      className={`fixed left-0 top-0 z-10 ${isOpen ? "" : "hidden"} flex h-screen w-screen items-center justify-center backdrop-blur-md`}
    >
      <div className="flex w-3/4 flex-col gap-3 rounded-3xl bg-white p-5 dark:bg-slate-800">
        {children}
      </div>
    </div>
  );
}
