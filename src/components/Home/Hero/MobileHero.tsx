"use client";

import { TextAnimate } from "@/components/magicui/text-animate";
import React, { useRef } from "react";
import { useMobileHeroAnimation } from "@/AnimationHooks/useHeroAnimation";

const MobileHero = () => {
  const container = useRef(null);
  const textRef = useRef(null);

  useMobileHeroAnimation({ container });
  return (
    <section
      ref={container}
      className="2xl:hidden min-h-screen w-full text-white relative overflow-hidden"
    >
      <div className="hero-mobile-bg absolute inset-0 z-1" />
      <div className="bg-linear flex items-end justify-center absolute left-0 right-0 bottom-0 z-7">
        <TextAnimate
          ref={textRef}
          className="font-[--font-playfair] uppercase text-center text-[15vw] xs:text-[8vw] 
          tracking-wider cursor-pointer-none !pb-[10rem] text-white"
          animation="blurInUp"
          by="character"
          duration={1.3}
          once={true}
        >
          Wonderkin Tattoo
        </TextAnimate>
      </div>
    </section>
  );
};

export default MobileHero;
