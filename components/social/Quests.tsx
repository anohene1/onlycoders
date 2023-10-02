"use client"

import React, {useEffect, useRef} from "react";
import Badge from "./Badges";
import {gsap, Power3} from "gsap";

const Quests = () => {

    const questsContainerRef = useRef<HTMLDivElement>(null)

    // Animations
    useEffect(() => {
        gsap.to(questsContainerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: Power3.easeInOut,
            delay: 0.1
        })
    }, []);

  return (
    <div ref={questsContainerRef} className="bg-white border rounded-md translate-y-[10px] opacity-0 mt-8 lg:mt-0 border-[#F1F5F9] px-4 py-5 lg:col-span-3 lg:row-start-3 lg:col-start-10">
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
