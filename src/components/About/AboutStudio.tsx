"use client";

import Image from "next/image";
import React from "react";
import { BlurFade } from "../magicui/blur-fade";

const AboutStudio = () => {
  return (
    <section className="darkBg !h-[60vh] 2xl:!h-[170vh] 3xl:!h-[150vh] !relative">
      <div className="relative w-full h-full">
        <BlurFade
          delay={0.25}
          inView
          className="w-[70vw] !ml-4 md:!ml-10 overflow-hidden"
        >
          <Image
            width={1000}
            height={1000}
            src={"/about/das-studio1.jpg"}
            alt="das-studio-img"
            className="w-full h-full object-cover"
          />
        </BlurFade>
        <BlurFade
          className="absolute top-[20%] md:top-[30%] left-[60%] w-[30vw] overflow-hidden"
          delay={0.5}
          inView
        >
          <Image
            width={500}
            height={500}
            src={"/about/das-studio2.jpg"}
            alt="das-studio-img"
            className="w-full h-full object-cover"
          />
        </BlurFade>
        <div
          className="text-white absolute headingFont uppercase
            z-10 text-[13vw] -top-15 leading-10 left-[40%]
            md:leading-24 md:-top-36 md:left-[45%]
            lg:!leading-[10vw] lg:!-top-[14vw]"
        >
          <h1>Das</h1>
          <h2 className="!ml-[3rem]">Studio</h2>
        </div>
      </div>
    </section>
  );
};

export default AboutStudio;
