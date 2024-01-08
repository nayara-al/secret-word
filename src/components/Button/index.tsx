import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonType: "primary" | "secondary";
}
export default function Button({
  children,
  buttonType = "primary",
  ...rest
}: ButtonProps) {
  let paddingX;
  let paddingY;
  let textSize;

  if (buttonType === "secondary") {
    paddingX = "px-8";
    paddingY = "py-4";
    textSize = "text-[16px]";
  } else if (buttonType === "primary") {
    paddingX = "px-12";
    paddingY = "py-6";
    textSize = "text-[24px]";
  }
  return (
    <button
      {...rest}
      className={`border border-solid rounded-full font-semibold ${paddingX} ${paddingY} ${textSize}`}
    >
      {children}
    </button>
  );
}
