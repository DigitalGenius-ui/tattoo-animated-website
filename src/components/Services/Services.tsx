"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const container = useRef(null);

  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const imageContainer = useRef(null);

  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

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
      scrollTrigger: {
        trigger: container.current,
        start: "14% top",
        end: "+=100%",
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    tl2
      .to(image1Ref.current, {
        yPercent: -100,
        scale: 1.6,
        y: 60,
        ease: "power4.inOut",
      })
      .fromTo(
        image2Ref.current,
        { yPercent: 100, scale: 1.3, y: 80, ease: "power4.inOut" },
        { yPercent: 0, scale: 1, y: 0, ease: "power4.inOut" },
        "<"
      );
  }, []);
  return (
    <section
      ref={container}
      className="w-full h-[720px] relative flex items-center justify-center"
    >
      <div
        className="w-[600px] h-[600px] border border-white/30 rounded-full 
        absolute top-[90px] -left-[350px]"
      />
      <div className="w-[80%] mx-auto text-white flex items-center justify-between gap-[8rem] overflow-hidden">
        <div className="flex-1 !space-y-12">
          <div className="justify-self-start text-7xl text-right font-[--font-playfair] uppercase leading-[1]">
            <h1 ref={text1}>Passion and</h1>
            <h1 ref={text2}>precision</h1>
          </div>
          <p
            ref={text3}
            className="text-white/50 w-[20rem] text-sm justify-self-end"
          >
            Hey, I&apos;m Nicki, and I&apos;ve been tattooing in my studio in
            Düsseldorf since 2017. My expertise lies in mandala and traditional
            styles, but I&apos;m always open to new creative ideas so we can
            find your perfect tattoo together.
          </p>
        </div>
        <div
          ref={imageContainer}
          className="w-[25rem] h-[650px] overflow-hidden relative !pt-[4rem]"
        >
          <div
            ref={image1Ref}
            className="absolute w-full h-full overflow-hiddin"
          >
            <Image
              src="/service2.jpg"
              alt="First"
              fill
              className="object-cover"
            />
          </div>
          <div
            ref={image2Ref}
            className="absolute w-full h-full overflow-hiddin"
          >
            <Image
              src="/service1.jpg"
              alt="Second"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
