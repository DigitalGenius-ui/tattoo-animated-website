"use client";

import AnimatedImages from "@/utils/AnimatedImages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const images = ["/service2.jpg", "/service1.jpg"];

const Services = () => {
  const container = useRef(null);

  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const imageContainer = useRef(null);

  const timeline = useRef<gsap.core.Timeline>({} as gsap.core.Timeline);

  useGSAP(() => {
    gsap.set(text1.current, { x: 50, opacity: 0 });
    gsap.set(text2.current, { x: -50, opacity: 0 });
    gsap.set(text3.current, { x: 50, opacity: 0 });
    gsap.set(imageContainer.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });

    tl.to(
      text1.current,
      {
        x: 0,
        opacity: 1,
        duration: 1,
      },
      "a"
    );
    tl.to(
      text2.current,
      {
        x: 0,
        opacity: 1,
        duration: 1,
      },
      "a"
    );
    tl.to(
      text3.current,
      {
        x: 0,
        opacity: 1,
        duration: 1,
      },
      "a"
    );
    tl.to(
      imageContainer.current,
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      "a"
    );

    const tl2 = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom +60%",
        scrub: true,
        pin: true,
      },
    });

    timeline.current = tl2;
  }, []);
  return (
    <section className="w-full !h-[100vh] !relative">
      <div
        ref={container}
        className="w-full h-full flex items-center justify-center relative"
      >
        <div
          className="w-[50%] 3xl:w-[60%] aspect-square border border-white/30 rounded-full 
        absolute -left-[20%] 3xl:-left-[30%]"
        />
        <div
          className="w-[80%] mx-auto text-white flex items-center justify-between 
        gap-[8rem] overflow-hidden"
        >
          <div className="flex-1 !space-y-12">
            <div className="justify-self-start text-[5vw] text-right font-[--font-playfair] uppercase leading-[1]">
              <h1 ref={text1}>Passion and</h1>
              <h1 ref={text2}>precision</h1>
            </div>
            <p
              ref={text3}
              className="text-white/50 w-[20rem] 3xl:w-[30rem] 4xl:w-[35rem] text-[1.3vw] justify-self-end"
            >
              Hey, I&apos;m Nicki, and I&apos;ve been tattooing in my studio in
              Düsseldorf since 2017. My expertise lies in mandala and
              traditional styles, but I&apos;m always open to new creative ideas
              so we can find your perfect tattoo together.
            </p>
          </div>
          <AnimatedImages images={images} timeline={timeline} />
        </div>
      </div>
    </section>
  );
};

export default Services;
