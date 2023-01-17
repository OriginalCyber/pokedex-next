import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, ...attr } = props;
  return (
    <button
      className={twMerge(
        "px-4 py-2 bg-white",
        "border border-black/5",
        "rounded-xl shadow-xl front-medium",
        className
      )}
      {...attr}
    >
      {children}
    </button>
  );
};
