"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useRef } from "react";
import { TextAnimate } from "../../magicui/text-animate";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef(null);

  const textRef = useRef(null);
  const plantRef = useRef(null);
  const elliRef = useRef(null);
  const elliBgRef = useRef(null);

  useGSAP(() => {
    gsap.set(plantRef.current, { y: 60, opacity: 0 });
    gsap.set(elliRef.current, { y: 60, opacity: 0 });
    gsap.set(elliBgRef.current, { y: 40, opacity: 0 });

    gsap.to(plantRef.current, {
      y: 0,
      opacity: 1,
      delay: 1,
    });
    gsap.to(elliRef.current, {
      y: 0,
      opacity: 1,
      delay: 0.8,
    });
    gsap.to(elliBgRef.current, {
      y: 0,
      opacity: 1,
      delay: 0.6,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "80% 50%",
        scrub: true,
      },
    });

    tl.to(
      textRef.current,
      {
        opacity: 0,
      },
      "a"
    );
    tl.to(
      plantRef.current,
      {
        scale: 1.2,
        y: 850,
      },
      "a"
    );
    tl.to(
      elliBgRef.current,
      {
        scale: 1.2,
        y: 750,
      },
      "a"
    );

    tl.to(
      elliRef.current,
      {
        scale: 1.2,
        y: 550,
      },
      "a"
    );
  }, []);
  return (
    <section className="min-h-screen w-full flex items-end justify-center text-white relative overflow-hidden">
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
        className="font-[--font-playfair] uppercase text-[6.5rem] 
        3xl:text-[7.5rem] 4xl:text-[8.5rem] 5xl:text-[12rem]
        tracking-wider absolute top-24 4xl:top-60 5xl:top-48 z-1"
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
        className="z-10 absolute -bottom-25 w-[clamp(250px,30vw,700px)] 3xl:w-[33vw] 4xl:w-[45rem]
        3xl:h-[90vh] 4xl:h-[80vh] 5xl:h-[90vh] 5xl:-bottom-44 object-cover"
      />
    </section>
  );
};

export default Hero;
