"use client";

import RotateTextAnimation from "@/utils/RotateTextAnimation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";

const images = [
  { src: "/gallery1.jpg", col: "col-span-4", row: "row-span-1" },
  { src: "/gallery2.jpg", col: "col-span-2", row: "row-span-2" },
  { src: "/gallery4.jpg", col: "col-span-2", row: "row-span-2" },
  { src: "/gallery3.jpg", col: "col-span-2", row: "row-span-1" },
  { src: "/gallery5.jpg", col: "col-span-4", row: "row-span-1" },
];

gsap.registerPlugin(ScrollTrigger);

const Gallary = () => {
  const containerRef = useRef(null);
  const imageref = useRef<(HTMLDivElement | null)[]>([]);
  const otherImageRef = useRef<(HTMLDivElement | null)[]>([]);
  const nameRef = useRef(null);

  useGSAP(() => {
    gsap.set(imageref.current, { zIndex: 10 });
    gsap.set(nameRef.current, { y: 10, opacity: 0 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "15% top",
        end: "bottom+=100% top",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(
      imageref.current,
      {
        y: -25,
        scale: 3.1,
        duration: 1.75,
        ease: "power4.inOut",
      },
      "a"
    );

    tl.to(
      otherImageRef.current[0],
      {
        scale: 1.5,
        opacity: 0,
        y: -400,
        ease: "power2.inOut",
        duration: 1.5,
      },
      "a"
    );
    tl.to(
      otherImageRef.current[1],
      {
        scale: 1.5,
        opacity: 0,
        x: 700,
        ease: "power2.inOut",
        duration: 1.5,
      },
      "a"
    );
    tl.to(
      otherImageRef.current[2],
      {
        scale: 1.5,
        opacity: 0,
        x: -700,
        ease: "power2.inOut",
        duration: 1.5,
      },
      "a"
    );
    tl.to(
      otherImageRef.current[4],
      {
        scale: 1.5,
        opacity: 0,
        y: 700,
        ease: "power2.inOut",
        duration: 1.5,
      },
      "a"
    );

    tl.to(nameRef.current, {
      opacity: 1,
      y: 0,
      ease: "power2.inOut",
      duration: 1.5,
    });
  }, []);
  return (
    <>
      <section
        ref={containerRef}
        className="grid grid-cols-6 gap-4 auto-rows-[200px] !pt-[8rem]"
      >
        {images.map((img, index) => (
          <div
            ref={(el) => {
              if (imageref.current && index === 3) {
                imageref.current[index] = el;
              } else {
                otherImageRef.current[index] = el;
              }
            }}
            key={index}
            className={`relative ${img.col} ${img.row} rounded overflow-hidden`}
          >
            <Image
              src={img.src}
              alt={`Tattoo ${index + 1}`}
              fill
              className="object-cover"
            />
            {index === 3 && (
              <>
                <div
                  className="uppercase absolute top-[15%] left-[60%] w-[8rem] text-gray-800 
                  text-5xl font-[--font-playfair] flex flex-col leading-12"
                >
                  <h1 className="flex items-center">
                    <RotateTextAnimation
                      delay={0.6}
                      ref={containerRef}
                      text="g"
                    />
                    <RotateTextAnimation
                      delay={0.9}
                      ref={containerRef}
                      text="a"
                    />
                  </h1>
                  <h1 className="text-right flex items-end justify-end">
                    <RotateTextAnimation
                      delay={1.3}
                      ref={containerRef}
                      text="l"
                    />
                    <RotateTextAnimation
                      delay={1.6}
                      ref={containerRef}
                      text="a"
                    />
                    <RotateTextAnimation
                      delay={1.9}
                      ref={containerRef}
                      text="r"
                    />
                  </h1>
                  <h1 className="text-right flex items-end justify-end">
                    <RotateTextAnimation
                      delay={2.2}
                      ref={containerRef}
                      text="i"
                    />
                    <RotateTextAnimation
                      delay={2.5}
                      ref={containerRef}
                      text="e"
                    />
                  </h1>
                </div>
                <h1
                  ref={nameRef}
                  className="uppercase underline absolute bottom-[15%] left-[60%] text-sm font-light"
                >
                  ansehen
                </h1>
              </>
            )}
          </div>
        ))}
      </section>
      <div className="h-[120vh] text-white">next page is here</div>
    </>
  );
};

export default Gallary;
