"use client";

import { useGallaryAnimation } from "@/AnimationHooks/useGallaryAnimation";
import RotateTextAnimation from "@/utils/RotateTextAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import MobileGallary from "./MobileGallary";

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
  const imageRef = useRef<(HTMLDivElement | null)[]>([]);
  const nameRef = useRef(null);

  useGallaryAnimation({ containerRef, imageRef, nameRef });
  return (
    <>
      <MobileGallary />
      <section
        ref={containerRef}
        className="hidden 2xl:grid !min-h-screen 3xl:min-h-[1300px] grid-cols-6 gap-4  
        auto-rows-[200px] 3xl:auto-rows-[280px] 4xl:auto-rows-[400px] 5xl:auto-rows-[350px] 6xl:auto-rows-[480px]
        overflow-hidden"
      >
        {images.map((img, index) => (
          <div
            ref={(el) => {
              imageRef.current[index] = el;
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
                  text-5xl !font-[--font-playfair] flex flex-col leading-12 3xl:scale-110 4xl:scale-125 6xl:scale-150 6xl:leading-14"
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
                  className="uppercase underline absolute bottom-[15%] left-[60%] text-[0.7vw] font-light"
                >
                  ansehen
                </h1>
              </>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default Gallary;
