import React from "react";
import Image from "next/image";

interface IHexagonImage {
  image: string;
}

const HexagonImage: React.FC<IHexagonImage> = ({ image }) => {
  return (
    <div className="w-[40px] h-[40px] avatar  relative bg-black ">
      <Image src={image} alt="img" layout="fill" />
    </div>
  );
};

export default HexagonImage;
