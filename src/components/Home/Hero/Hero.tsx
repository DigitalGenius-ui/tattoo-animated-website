"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { TextAnimate } from "../../magicui/text-animate";
import MobileHero from "./MobileHero";
import "./hero.css";
import { useHeroAnimation } from "@/AnimationHooks/useHeroAnimation";

const Hero = () => {
  const container = useRef(null);

  const textRef = useRef(null);
  const plantRef = useRef(null);
  const elliRef = useRef(null);
  const elliBgRef = useRef(null);

  useHeroAnimation({ container, plantRef, textRef, elliRef, elliBgRef });
  return (
    <>
      <MobileHero />
      <section className="hidden 2xl:flex items-end justify-center min-h-screen w-full text-white relative overflow-hidden">
        <Image
          ref={plantRef}
          width={1000}
          height={1000}
          src="/plant.png"
          alt="plant"
          className="absolute bottom-0 w-[80vw] object-contain"
        />
        <div
          ref={elliBgRef}
          className="w-[clamp(250px,27vw,700px)] 3xl:w-[33rem] 4xl:w-[40rem] 5xl:w-[55rem]
          h-[70vh] 3xl:h-[80vh] 4xl:h-[75vh] 5xl:h-[80vh] absolute bottom-0 bg-stone-400 rounded-t-full"
        />
        <TextAnimate
          ref={textRef}
          className="font-[--font-playfair] uppercase text-[8vw]
          tracking-wider absolute top-24 4xl:top-60 5xl:top-40 z-1 cursor-pointer-none"
          animation="blurInUp"
          by="character"
          duration={1.3}
          once={true}
        >
          Wonderkin Tattoo
        </TextAnimate>

        <Image
          ref={elliRef}
          width={400}
          height={400}
          src="/elli-desktop.png"
          alt="elli"
          className="z-8 absolute -bottom-25 w-[clamp(250px,30vw,700px)] 3xl:w-[33vw] 4xl:w-[45rem]
        3xl:h-[90vh] 4xl:h-[80vh] 5xl:h-[90vh] 5xl:-bottom-44 object-cover"
        />
      </section>
    </>
  );
};

export default Hero;
