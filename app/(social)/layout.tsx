import NavBar from "@/components/shared/NavBar";
import SideBar from "@/components/shared/SideBar";
import React from "react";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="relative min-h-screen min-w-full bg-[#f8f8fb] pb-24 overflow-scroll lg:pb-0">
      <NavBar />
      <div className="px-5 pt-[90px] lg:pt-[120px] lg:ml-[77px] lg:px-32">
        {children}
      </div>
      <SideBar />
    </div>
  );
};

export default Layout;
