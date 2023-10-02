import React from "react";

const Banner = () => {
  return (
    <div className="banner-gradient p-5 rounded-lg lg:sticky  lg:z-10 lg:py-10 lg:px-7">
      <p className="text-[16px] lg:text-[20px] text-white  font-medium">
        Newsfeed
      </p>
      <p className="text-[14px] text-[#F5F3FF]">
        Check what your friends have been up to
      </p>
    </div>
  );
};

export default Banner;
