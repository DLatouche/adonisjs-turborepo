import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  appName: string;
}

export const Button = ({ children, appName }: ButtonProps) => {
  return (
    <button
      className="m-4 h-24 border-gray-300 p-3 "
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
