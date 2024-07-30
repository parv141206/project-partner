import React, { useContext } from "react";
import ThemeContext from "../Contexts/Theme";

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Abe hook provider na andar ave nooooooooooooooooob");
  }
  const { theme, setTheme } = context;

  return { theme, setTheme };
};

export default useTheme;
