import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import Button from "@/components/shared/Button";
import { redirect } from "next/navigation";

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
            <svg
              width="59"
              height="59"
              viewBox="0 0 59 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <path
                d="M56.0848 29.4974C56.0848 26.957 59.5482 23.9679 58.9216 21.6138C58.2695 19.1793 53.7604 18.3367 52.5283 16.2028C51.2963 14.0689 52.7866 9.7207 51.0295 7.96362C49.2724 6.20654 44.9581 7.72229 42.7903 6.46905C40.6225 5.21581 39.8266 0.727844 37.3836 0.0758199C35.0295 -0.550801 32.0531 2.91255 29.5 2.91255C26.947 2.91255 23.9705 -0.550801 21.6165 0.0758199C19.182 0.727844 18.3394 5.23698 16.2055 6.46905C14.0716 7.70112 9.72337 6.21077 7.96629 7.96785C6.20922 9.72493 7.72496 14.0393 6.47172 16.2071C5.21848 18.3748 0.730519 19.1708 0.078495 21.6138C-0.560827 23.9679 2.91522 26.957 2.91522 29.4974C2.91522 32.0377 -0.548126 35.0269 0.078495 37.3809C0.730519 39.8154 5.23965 40.658 6.47172 42.7919C7.70379 44.9258 6.21345 49.274 7.97053 51.0311C9.72761 52.7882 14.042 51.2724 16.2097 52.5257C18.3775 53.7789 19.1735 58.2669 21.6165 58.9189C23.9705 59.5455 26.947 56.0822 29.5 56.0822C32.0531 56.0822 35.0295 59.5455 37.3836 58.9189C39.8181 58.2669 40.6606 53.7577 42.7945 52.5257C44.9284 51.2936 49.2767 52.7839 51.0338 51.0269C52.7908 49.2698 51.2751 44.9554 52.5283 42.7876C53.7816 40.6199 58.2695 39.8239 58.9216 37.3809C59.5609 35.0269 56.0848 32.0377 56.0848 29.4974Z"
                fill="#166534"
              />
              <path
                d="M28.066 40.4259L13.6073 28.5413C13.2751 28.2669 13.097 27.9013 13.112 27.525C13.127 27.1486 13.3339 26.7922 13.6873 26.5343C14.0406 26.2764 14.5115 26.1381 14.9962 26.1497C15.4809 26.1613 15.9399 26.322 16.272 26.5964L27.6237 35.932L41.9598 19.7934C42.0901 19.6297 42.2618 19.4884 42.4646 19.3779C42.6674 19.2674 42.8971 19.19 43.1395 19.1506C43.382 19.1111 43.6323 19.1103 43.8752 19.1483C44.1181 19.1862 44.3485 19.2621 44.5525 19.3713C44.7564 19.4805 44.9297 19.6208 45.0616 19.7836C45.1936 19.9464 45.2816 20.1284 45.3202 20.3184C45.3589 20.5084 45.3474 20.7026 45.2864 20.889C45.2254 21.0755 45.1163 21.2504 44.9656 21.4031L28.066 40.4259Z"
                fill="white"
              />
            </svg>
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
