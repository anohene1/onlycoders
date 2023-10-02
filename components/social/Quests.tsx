import React from "react";
import Badge from "./Badges";

const Quests = () => {
  return (
    <div className="bg-white border rounded-md  mt-8 lg:mt-0 border-[#F1F5F9] px-4 py-5 lg:col-span-3 lg:row-start-3 lg:col-start-10">
      <h2 className="text-[#475569] font-bold">Badges</h2>

      <div className="mt-4">
        <Badge
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxWjBkKgMVw9zPiwVvLr4-3ETgf8qV3OXNA&usqp=CAU"
          message="Has joined at least 10 different groups"
          name="Global Trotter"
        />
      </div>
    </div>
  );
};

export default Quests;
