"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const AnimatedButton = ({ btnName }: { btnName: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const sequareEffect = useRef<HTMLSpanElement>(null);
  const circleEffect = useRef<HTMLSpanElement[]>([]);

  const playEffect = useRef<gsap.core.Timeline>({} as gsap.core.Timeline);
  const circlePlay = useRef<gsap.core.Timeline>({} as gsap.core.Timeline);

  useGSAP(() => {
    playEffect.current = gsap
      .timeline({ paused: true })
      .to(sequareEffect.current, {
        rotate: 135,
        ease: "circ.in",
        duration: 0.5,
      });

    circlePlay.current = gsap
      .timeline({ paused: true })
      .to(circleEffect.current, {
        scale: 1,
        stagger: 0.1,
        ease: "circ.in",
        duration: 0.5,
      });
  }, []);

  useEffect(() => {
    if (isHovered) {
      playEffect.current.play();
      circlePlay.current.play();
    } else {
      playEffect.current.reverse();
      circlePlay.current.reverse();
    }
  }, [isHovered]);
  return (
    <button
      type="submit"
      className="border border-white rounded-full w-[13rem] relative
        !py-3 !px-5 text-sm flex items-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {btnName}
      <span
        className="absolute right-0 -top-1.5 bottom-0 border border-white/90 
        w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center"
      >
        <ChevronRight size={16} />
      </span>
      <span
        ref={sequareEffect}
        className="absolute right-1 top-0 bottom-0 border border-white/90
        w-[3rem] h-[3rem] flex items-center justify-center rotate-45"
      />
      {Array.from({ length: 3 }).map((_, i) => (
        <span
          key={i}
          ref={(el) => {
            if (el) circleEffect.current.push(el);
          }}
          className="absolute right-0 -top-1.5 bottom-0 border border-white/90
            w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-full scale-0"
        />
      ))}
    </button>
  );
};

export default AnimatedButton;
