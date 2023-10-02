"use client"

import React, {useEffect, useRef} from "react";
import Badge from "./Badges";
import {gsap, Power3} from "gsap";

const BadgesGroup = () => {

    const badgesGroupContainerRef = useRef<HTMLDivElement>(null)

    // Animations
    useEffect(() => {
        gsap.to(badgesGroupContainerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: Power3.easeInOut,
            delay: 0.1
        })
    }, []);

  return (
    <div ref={badgesGroupContainerRef} className="bg-white border rounded-md  lg:row-start-3 lg:h-auto translate-y-[10px] opacity-0  mt-8 lg:mt-0  border-[#F1F5F9] px-4 py-5 lg:col-span-3 lg:col-start-1">
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
