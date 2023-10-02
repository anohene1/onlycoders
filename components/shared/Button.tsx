"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface IButton {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  textColor?: string;
  bg?: string;
  isDisabled?: boolean;
  borderColor?: string;
  className?: string;
  btnType?: string;
  routeLocation?: string;
}

const Button: React.FC<IButton> = ({
  text,
  textColor,
  bg,
  isDisabled,
  btnType = "solid",
  borderColor,
  className,
  type,
  routeLocation,
}) => {
  const router = useRouter();
  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={() => routeLocation?.length && router.push(routeLocation)}
      className={`py-4 w-full disabled:bg-[#E2E8F0] disabled:text-[#94A3B8] rounded-md active:opacity-80 hover:opacity-90 ${textColor} ${
        btnType == "solid" && bg
      } ${btnType == "outline" && "border"} ${borderColor} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
