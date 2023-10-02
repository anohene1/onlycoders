"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/assets/images/logo.png";
import FormLabel from "@/components/shared/FormLabel";
import AuthInput from "@/components/shared/AuthInput";
import Button from "@/components/shared/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "@/schema/signup";
import { useRouter } from "next/navigation";

interface ISignupData {
  email: string;
  password: string;
  confirm_password: string;
}

const Page = () => {
  const [isLoading, setIsloading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignupData>({
    resolver: yupResolver(signupSchema),
  });
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    setIsloading(true);
    const req = await fetch("/signup/api", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        confirm_password: data.confirm_password,
      }),
    });

    const res = await req.json();
    setIsloading(false);
    if (req.ok) {
      router.push("/status?status=success");
    } else {
      router.push(`/status?status=error&message=${res.error.join(", ")}`);
    }
  });

  return (
    <div className="w-[92%] lg:w-[35%] mx-auto relative">
      <div className="w-full">
        <Image
          src={Logo}
          alt="logo"
          className="w-[41px] h-[41px] lg:w-[53px] lg:h-[53px] mx-auto"
        />
        <p className="text-[#3F3F46] font-semibold text-[18px] lg:text-[22px] text-center mt-4">
          Let&apos;s get you started
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-sm border border-[#F1F5F9] mt-6 py-10 lg:py-5 px-3 rounded-md"
      >
        <div>
          <FormLabel message="Email" />
          <AuthInput
            register={register("email")}
            type="email"
            placeholder="youramazingname@mail.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mt-7 lg:mt-4">
          <FormLabel message="Password" />
          <AuthInput
            register={register("password")}
            type="password"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="mt-7 lg:mt-4">
          <FormLabel message="Confirm password" />
          <AuthInput
            register={register("confirm_password")}
            type="password"
            placeholder="Confirm your password"
          />
          {errors.confirm_password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirm_password.message}
            </p>
          )}
        </div>
        <div className="mt-7 lg:mt-4">
          <Button
            text={isLoading ? "Loading..." : "Create my account!"}
            bg="bg-[#166534]"
            textColor="text-[#F0FDF4]"
            type="submit"
            isDisabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default Page;
