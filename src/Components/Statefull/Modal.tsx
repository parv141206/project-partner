import React from "react";
import Card from "./Card";

export default function Modal({
  isOpen,
  title,
  children,
}: {
  isOpen: boolean;
  title: string;
  children?: React.ReactNode;
}) {
  return isOpen ? (
    <div className="fixed left-0 top-0 z-40 flex h-screen w-screen items-center justify-center backdrop-blur-md transition-all">
      <Card title={title}>{children}</Card>
    </div>
  ) : (
    <></>
  );
}
