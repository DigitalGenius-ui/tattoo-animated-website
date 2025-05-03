"use client";

import { useMobileGallaryAnimation } from "@/AnimationHooks/useGallaryAnimation";
import Spacer from "@/utils/Spacer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import "./mobileGallary.css";

gsap.registerPlugin(ScrollTrigger);

const images1 = [
  {
    src: "/gallery1.jpg",
    className: "w-[70%] h-[20vh] object-cover",
  },
  {
    src: "/gallery2.jpg",
    className: "w-[35%] h-[15vh] object-cover absolute right-0 -bottom-20",
  },
];

const images2 = [
  {
    src: "/gallery4.jpg",
    className: "w-[35%] h-[15vh] object-cover absolute left-0 -top-20",
  },
  {
    src: "/gallery5.jpg",
    className: "w-[70%] h-[20vh] object-cover justify-self-end",
  },
];

const MobileGallary = () => {
  const container = useRef(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const middleImg = useRef(null);

  useMobileGallaryAnimation({ container, imagesRef, middleImg });
  return (
    <section
      ref={container}
      className="2xl:hidden min-h-screen !overflow-hidden"
    >
      <div className="w-full h-full !relative flex flex-col">
        <div className="relative !ml-[1rem]">
          {images1.map((img, i) => (
            <Image
              key={"gallary-mobile-img" + i}
              ref={(el) => {
                if (el) imagesRef.current.push(el);
              }}
              width={400}
              height={300}
              src={img.src}
              alt="gallary-mobile-img"
              className={img.className}
            />
          ))}
        </div>
        <Spacer className="flex-1" />
        <div className="relative">
          {images2.map((img, i) => (
            <Image
              key={"gallary-mobile-img" + i}
              ref={(el) => {
                if (el) imagesRef.current.push(el);
              }}
              width={400}
              height={300}
              src={img.src}
              alt="gallary-mobile-img"
              className={img.className}
            />
          ))}
        </div>
        <div className="absolute inset-0">
          <div className="w-full h-full flex items-center justify-center">
            <div
              ref={middleImg}
              className="relative w-[50%] h-[50vh] bg-no-repeat bg-cover"
              style={{
                backgroundImage: "url('/gallery3.jpg')",
              }}
            >
              {/* dark bg for the shapes  */}
              <div className="dark-bg absolute inset-0 bg-bodyBg/80 opacity-0 !z-1" />
              <div className="w-full h-full relative !z-9 ">
                <div className="!relative flex-1 w-full h-full flex items-center justify-center">
                  <div className="opacity-0 gal-text flex items-center flex-col justify-center gap-1 text-[6vw] text-white">
                    <h1>Gallerry</h1>
                    <h1>Anshin</h1>
                  </div>
                  <Image
                    width={400}
                    height={100}
                    src="/footer/lineTop.svg"
                    alt="line-top"
                    className="line1 absolute"
                  />
                  <Image
                    width={400}
                    height={100}
                    src="/footer/lineBottom.svg"
                    alt="line-top"
                    className="line2 absolute"
                  />
                  <div className="absolute shape1 size-[15rem] s:size-[18rem] borderColor" />
                  <div className="absolute shape2 size-[15rem] s:size-[18rem] borderColor" />
                  <div className="absolute shape3 size-[18rem] s:size-[22rem] borderColor rounded-full" />
                  <div className="absolute shape4 size-[18rem] s:size-[22rem] borderColor rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileGallary;
