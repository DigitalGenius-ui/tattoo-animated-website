"use client";

import { useRef } from "react";
import { TextAnimate } from "../magicui/text-animate";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutHero = () => {
  const textRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      ".aboutText",
      { opacity: 0, y: 30, stagger: 0.2, duration: 1 },
      { opacity: 1, y: 1, stagger: 0.2, duration: 1 }
    );
  });
  return (
    <section className="hero w-full h-screen relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.2)",
        }}
      />
      <video
        muted
        // loop
        // autoPlay
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/about/about-desk.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col 2xl:flex-row items-center">
        <div
          className="flex-1 flex w-full h-full  
            2xl:items-center 2xl:w-auto 2xl:justify-end"
        >
          <div
            className="h-full flex flex-col justify-end text-white !pl-4
            text-7xl
            s:text-8xl
            md:text-9xl
            3xl:text-[11vw]
            md:w-full"
          >
            <TextAnimate
              className="2xl:h-auto font-[--font-playfair] uppercase"
              ref={textRef}
              animation="blurInUp"
              by="character"
              duration={1}
              once={true}
            >
              Hey, I&apos;m
            </TextAnimate>
            <TextAnimate
              className="2xl:!ml-[15rem] 3xl:!ml-[24vw] w-full font-[--font-playfair] uppercase"
              ref={textRef}
              animation="blurInUp"
              by="character"
              duration={1}
              delay={1}
              once={true}
            >
              Nicki
            </TextAnimate>
          </div>
        </div>
        <div
          className="flex-1 flex darkWhite w-full justify-end items-end !pr-5
            2xl:!pr-30"
        >
          <div
            className="flex flex-col !pb-[4rem] w-[60vw]
             2xl:w-[15vw]"
          >
            <p className="aboutText text-[4vw] 2xl:text-[1vw]">
              Every customer brings their own
            </p>
            <p className="aboutText text-[4vw] 2xl:text-[1vw]">
              story. My passion is to tell a part
            </p>
            <p className="aboutText text-[4vw] 2xl:text-[1vw]">
              of it with every needle prick.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
