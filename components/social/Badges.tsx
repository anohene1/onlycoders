import Image from "next/image";
import React from "react";

interface IBadge {
  image: string;
  name: string;
  message: string;
}

const Badge: React.FC<IBadge> = ({ image, name, message }) => {
  return (
    <div className="flex gap-3">
      <div className="w-[50px] h-[50px] relative">
        <Image src={image} alt={"badge"} layout="fill" />
      </div>
      <div>
        <p className="text-[#475569] font-semibold">{name}</p>
        <p className="text-[12px] text-[#94A3B8]">{message}</p>
      </div>
    </div>
  );
};

export default Badge;
