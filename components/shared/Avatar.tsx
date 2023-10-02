import Image from "next/image";
import React from "react";

interface IAvatar {
  image: string;
  level: string;
}

const Avatar: React.FC<IAvatar> = ({ image, level }) => {
  return (
    <div className="relative">
      <div className="w-[45px] h-[45px] avatar  overflow-visible bg-[#F57AF0] flex justify-center items-center ">
        <div className="w-[40px] h-[40px] avatar  relative  ">
          <Image src={image} alt="test-img" layout="fill" />
        </div>
      </div>
      <div className="w-[24px] h-[24px] avatar absolute -right-1 -bottom-2 bg-white flex justify-center items-center ">
        <div className="w-[20px] h-[20px] avatar  relative bg-[#1e293b] text-white font-semibold flex justify-center items-center text-xs">
          <p>{level}</p>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
