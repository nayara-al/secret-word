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
  let buttonColor;

  if (buttonType === "secondary") {
    paddingX = "px-8 max-md:px-3";
    paddingY = "py-4 max-md:py-2";
    textSize = "text-base";
    buttonColor = "bg-rose-950"
  } else if (buttonType === "primary") {
    paddingX = "px-12 max-md:px-4";
    paddingY = "py-6 max-md:py-4";
    textSize = "text-2xl max-md:text-base";
    buttonColor = "bg-slate-500"
  }
  return (
    <button
      {...rest}
      className={` border border-solid rounded-full font-semibold ${buttonColor} ${paddingX} ${paddingY} ${textSize}`}
    >
      {children}
    </button>
  );
}
