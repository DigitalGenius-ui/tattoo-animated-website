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
    gsap.set(elliRef.current, { y: 50, opacity: 0 });
    gsap.set(elliBgRef.current, { y: 40, opacity: 0 });

    gsap.to(plantRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.3,
      delay: 1,
    });
    gsap.to(elliRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.3,
      delay: 0.8,
    });
    gsap.to(elliBgRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.3,
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
        duration: 1,
      },
      "a"
    );
    tl.to(
      plantRef.current,
      {
        scale: 1.2,
        y: 100,
        duration: 1,
      },
      "a"
    );
    tl.to(
      elliBgRef.current,
      {
        scale: 1.2,
        y: 180,
        duration: 0.7,
      },
      "a"
    );

    tl.to(
      elliRef.current,
      {
        scale: 1.2,
        y: 100,
        duration: 1,
      },
      "a"
    );
  }, []);
  return (
    <section className="h-[500px] w-full flex items-end justify-center text-white relative overflow-hidden">
      <div>
        <Image
          ref={plantRef}
          width={1000}
          height={1000}
          src={"/plant.png"}
          alt="plant"
        />
        <TextAnimate
          ref={textRef}
          className="font-[--font-playfair] uppercase text-8xl tracking-wider absolute top-5 z-1"
          animation="blurInUp"
          by="character"
          duration={1.3}
          once={true}
        >
          Wonderkin Tattoo
        </TextAnimate>
        <div
          ref={elliBgRef}
          className="w-[26rem] h-[34rem] absolute -bottom-27 left-[34%] bg-stone-400 rounded-t-full"
        />
        <Image
          ref={elliRef}
          width={400}
          height={400}
          src={"/elli-desktop.png"}
          alt="elli"
          className="z-10 absolute -bottom-27 left-[34%]"
        />
      </div>
    </section>
  );
};

export default Hero;
