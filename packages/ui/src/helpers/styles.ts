import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// clsx is used for combines conditional classes in a simple and readable way
// twmerge is a utility specific to Tailwind CSS that merges and handles Tailwind classes, automatically resolving conflicts

// example of use
/* cn(
  "bg-blue-500",
  { "hover:bg-blue-700": isHovered }, // conditional classes, used only if isHoverd is true
  "p-4",
  "bg-blue-600" // background is already blue-500 so this class is not used
);
 */
export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};
