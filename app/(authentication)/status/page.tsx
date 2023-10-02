"use client"

import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import Button from "@/components/shared/Button";
import { redirect } from "next/navigation";
import Lottie from "lottie-react";
import successAnimation from "@/assets/animations/success.json"

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  if (!["success", "error"].includes(searchParams.status as string)) {
    redirect("/");
  }
  return (
    <div className="w-[92%] lg:w-[35%] mx-auto relative">
      <div className="w-full">
        <Image
          src={Logo}
          alt="logo"
          className="w-[41px] h-[41px] lg:w-[53px] lg:h-[53px] mx-auto"
        />
      </div>
      <div className="bg-white shadow-sm border border-[#F1F5F9] mt-6 py-10 lg:py-5 px-3 rounded-md">
        {searchParams.status == "success" && (
            <>
            <Lottie className="h-20 w-20 mx-auto" animationData={successAnimation} loop={false} />
            <p className="text-center text-[#475569] font-medium mt-5">
              Your account has been created!
            </p>
            <div className="mt-4">
              <Button
                text="Go back"
                bg="bg-[#166534]"
                textColor="text-[#166534]"
                className="mt-4 lg:mt-0"
                btnType="outline"
                borderColor="border-[#166534]"
                routeLocation="/signup"
              />
            </div>
          </>
        )}

        {searchParams.status == "error" && (
          <>
            <svg
              className="mx-auto"
              width="69"
              height="69"
              viewBox="0 0 69 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.9793 57.5313C57.9723 51.7437 63.8135 36.519 58.0259 23.5259C52.2383 10.5329 37.0136 4.69174 24.0206 10.4793C11.0276 16.2669 5.1864 31.4916 10.974 44.4846C16.7616 57.4777 31.9863 63.3188 44.9793 57.5313Z"
                fill="#DC2626"
              />
              <path
                d="M47.9458 30.0812H21.1718V35.8822H47.9458V30.0812Z"
                fill="#FAFAFA"
              />
            </svg>
            <p className="text-center text-[#475569] font-medium mt-5 mb-4">
              We had some trouble saving your information. These are the errors
              encountered:
            </p>
            {(searchParams.message as string)
              ?.split(", ")
              .map((message, idx) => (
                <p className="text-red-400 font-medium text-center" key={idx}>
                  {message}
                </p>
              ))}
            <div className="mt-5 lg:flex lg:items-center lg:gap-5 lg:px-4 lg:mt-8">
              <Button
                text="Try again"
                bg="bg-[#166534]"
                textColor="text-[#F0FDF4]"
                routeLocation="/signup"
              />
              <Button
                text="Go back"
                bg="bg-[#166534]"
                textColor="text-[#166534]"
                className="mt-4 lg:mt-0"
                btnType="outline"
                borderColor="border-[#166534]"
                routeLocation="/signup"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default page;
