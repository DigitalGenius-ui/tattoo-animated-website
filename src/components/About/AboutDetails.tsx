"use client";

import { useAboutDetailsAnimation } from "@/AnimationHooks/useAboutAnimations";
import Image from "next/image";
import React, { useRef } from "react";

const AboutDetails = () => {
  const container = useRef(null);
  useAboutDetailsAnimation({ container });
  return (
    <section
      ref={container}
      className="darkBg w-full h-screen 2xl:h-[150vh] 3xl:h-[120vh] flex items-center justify-center relative"
    >
      <Image
        width={300}
        height={300}
        className="prism absolute size-[40%] 2xl:size-[20rem] 6xl:size-[35rem] opacity-40"
        src={"/about/prism.svg"}
        alt="about-details-svg"
      />
      <Image
        width={650}
        height={650}
        className="shine absolute size-[80%] 2xl:size-[40rem]  6xl:size-[70rem]"
        src={"/about/shine.svg"}
        alt="about-details-svg"
      />
      <p className="darkWhite z-10 relative text-center w-[70%] 2xl:w-[40%] text-[3vw] 2xl:text-[1.5vw]">
        I&apos;m Nicki, a passionate tattoo artist with seven years of
        experience in the art of tattooing. My goal is to create unique and
        personal designs that express your story and personality. Whatever your
        idea, I&apos;ll work closely with you to turn your vision into reality.
      </p>
    </section>
  );
};

export default AboutDetails;
