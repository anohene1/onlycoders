import React from "react";
import Badge from "./Badges";

const BadgesGroup = () => {
  return (
    <div className="bg-white border rounded-md  lg:row-start-3 lg:h-auto   mt-8 lg:mt-0  border-[#F1F5F9] px-4 py-5 lg:col-span-3 lg:col-start-1">
      <h2 className="text-[#475569] font-bold">Quest</h2>

      <div className="mt-4">
        <Badge
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ9ZNwGcVc-zjn5JahksUz3ft6zxkPvyU5J_FXznruAke0-Iw-nsNJvDqhOFLnbnH_osg&usqp=CAU"
          message=" Posted more than 20 profile activity in one day"
          name="Posting Machine"
        />
      </div>
    </div>
  );
};

export default BadgesGroup;
