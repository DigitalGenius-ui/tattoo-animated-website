"use client";

import { useScrollDirection } from "@/Hooks/useScrollDirection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronUp } from "lucide-react";
import React, { useEffect, useRef } from "react";

const ScrollUpButton = () => {
  const { currentScrollY, scrollDirection } = useScrollDirection(70);
  const btnShow = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    gsap.set(".scrollUpBtn", { rotate: 45, opacity: 0, scale: 0 });
    btnShow.current = gsap.to(".scrollUpBtn", {
      rotate: 0,
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    if (currentScrollY > 300 && scrollDirection === "up") {
      btnShow.current?.play();
    } else {
      btnShow.current?.reverse();
    }
  }, [scrollDirection, currentScrollY]);

  const clickToScroll = () => {
    console.log("clicked");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={clickToScroll}
      className={`scrollUpBtn size-[3.5rem] fixed bottom-10 right-10 cursor-pointer
      flex items-center justify-center text-sm group z-10`}
    >
      <span
        className="absolute border border-white/90 text-white pointer-events-none
            w-[3rem] h-[3rem] rounded-full flex items-center justify-center z-1"
      >
        <ChevronUp size={16} />
      </span>
      <span
        className="absolute border border-white/90
        transition-all duration-400 ease-in-out w-[2.5rem] h-[2.5rem] 
        flex items-center justify-center rotate-45 group-hover:rotate-135 darkBg z-0"
      />
    </button>
  );
};

export default ScrollUpButton;
