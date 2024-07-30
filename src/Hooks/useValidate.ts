import { useCallback } from "react";

const useValidate = () => {
  const validate = useCallback((...args: any[]) => {
    const errors: string[] = [];

    args.forEach((arg, index) => {
      if (arg === undefined) {
        errors.push(`Argument at index ${index} is undefined.`);
      } else if (arg === null) {
        errors.push(`Argument at index ${index} is null.`);
      } else if (typeof arg === "string" && arg.trim() === "") {
        errors.push(`Argument at index ${index} is an empty string.`);
      } else if (Array.isArray(arg) && arg.length === 0) {
        errors.push(`Argument at index ${index} is an empty array.`);
      } else if (typeof arg === "object" && Object.keys(arg).length === 0) {
        errors.push(`Argument at index ${index} is an empty object.`);
      }
    });

    return errors.length > 0 ? errors : null;
  }, []);

  return { validate };
};

export default useValidate;
