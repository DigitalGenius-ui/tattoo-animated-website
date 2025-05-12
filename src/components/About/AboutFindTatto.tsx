"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { BlurFade } from "../magicui/blur-fade";
import Spacer from "@/utils/Spacer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutFindTatto = () => {
  const container = useRef(null);
  useGSAP(() => {
    gsap.set(".text-1, .text-3", { opacity: 0, x: 100 });
    gsap.set(".text-2", { opacity: 0, x: -100 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
        },
      })
      .to(
        ".text-1",
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
        },
        "a"
      )
      .to(
        ".text-2",
        {
          opacity: 1,
          x: 0,
        },
        "a"
      );
  }, []);
  return (
    <section ref={container} className="darkBg">
      <div className="flex items-center justify-center gap-6">
        <BlurFade delay={0.25} inView>
          <Image
            width={1000}
            height={1000}
            src="/about/das-studio3.jpg"
            alt="das-studio3"
            className="w-[50vw] object-cover"
          />
        </BlurFade>
        <BlurFade delay={0.25} inView>
          <Image
            width={1000}
            height={1000}
            src="/about/das-studio4.jpg"
            alt="das-studio1"
            className="!w-[25vw] !object-cover"
          />
        </BlurFade>
      </div>
      <Spacer className="h-[8rem] md:!h-[10rem] 4xl:h-0 5xl:h-[8rem] 6xl:h-[20rem]" />
      <div className="!space-y-10 !w-[90%] 2xl:!w-[70%] !mx-auto">
        <div
          className="font-[--font-playfair] text-white uppercase
          text-[11vw] leading-[11vw]
          2xl:text-[7vw] 2xl:leading-[7vw] 2xl:tracking-wide"
        >
          <h2 className="text-1">Let&apos;s find</h2>
          <h3 className="text-2 !ml-[6vw]">your tattoo</h3>
          <h4 className="text-1 !ml-[17vw]">together</h4>
        </div>
        <p
          className="darkWhite 
          text-[4.5vw] w-full
          md:!ml-[18vw] md:w-[80%] md:text-[3.6vw]
          2xl:!text-[1vw] 2xl:!leading-[1.5vw] 2xl:!w-[22vw]"
        >
          Schedule a consultation now, and together we&apos;ll develop the
          tattoo that perfectly suits you. Whether you already have a clear idea
          or are simply looking for inspiration – I&apos;m excited to bring your
          ideas to life.
        </p>
      </div>
    </section>
  );
};

export default AboutFindTatto;
