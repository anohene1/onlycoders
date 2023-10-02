import React from "react";
import BgMobile from "@/assets/images/bg-sm.png";
import BgLg from "@/assets/images/bg-lg.png";
import Image from "next/image";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className=" relative min-h-screen min-w-full bg-lg flex justify-center lg:items-center overflow-hidden pt-10 lg:pt-0">
      <Image
        className="absolute left-0 top-0 hidden h-full w-full lg:block"
        src={BgLg}
        alt="bg"
      />
      <Image
        className="absolute left-0 top-0 mt-24 h-full w-full lg:hidden"
        src={BgMobile}
        alt="bg"
      />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
