import React from "react";
import { motion } from "framer-motion";

export default function Button({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <motion.div
      className={`${className} btn cursor-pointer rounded-xl bg-yellow-300 px-3 py-1 text-black dark:bg-white`}
      whileHover={{
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
    >
      {title}
    </motion.div>
  );
}
