import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest} className="py-6 px-12 border border-solid rounded-full">
      {children}
    </button>
  );
}
