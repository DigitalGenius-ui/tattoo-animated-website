"use client";

import { useMobileGallaryAnimation } from "@/AnimationHooks/useGallaryAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const MobileGallary = () => {
  const container = useRef(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const middleImg = useRef(null);
  const middleImgDiv = useRef(null);

  useMobileGallaryAnimation({ container, imagesRef, middleImg, middleImgDiv });
  return (
    <section
      ref={container}
      className="2xl:hidden !min-h-screen overflow-hidden"
    >
      <div className="relative !ml-[1rem]">
        <Image
          ref={(el) => {
            if (el) imagesRef.current.push(el);
          }}
          width={400}
          height={300}
          src="/gallery1.jpg"
          alt="gallary-mobile-img"
          className="w-2/3 h-[250px] object-cover"
        />
        <Image
          ref={(el) => {
            if (el) imagesRef.current.push(el);
          }}
          width={400}
          height={300}
          src="/gallery2.jpg"
          alt="gallary-mobile-img"
          className="w-2/5 h-[170px] object-cover absolute right-0 -bottom-20"
        />
      </div>
      <div className="relative !mr-[1rem] !mt-[14rem]">
        <Image
          ref={(el) => {
            if (el) imagesRef.current.push(el);
          }}
          width={400}
          height={300}
          src="/gallery4.jpg"
          alt="gallary-mobile-img"
          className="w-2/5 h-[170px] object-cover"
        />
        <Image
          ref={(el) => {
            if (el) imagesRef.current.push(el);
          }}
          width={400}
          height={300}
          src="/gallery5.jpg"
          alt="gallary-mobile-img"
          className="w-2/3 h-[250px] object-cover absolute right-0 -bottom-40"
        />
      </div>
      <div
        ref={middleImgDiv}
        className="w-1/3 h-2/6 absolute top-[15rem] xs:top-[18rem] left-[33%]"
      >
        <div className="relative w-full h-full overflow-hidden">
          <Image
            ref={middleImg}
            width={400}
            height={300}
            src="/gallery3.jpg"
            alt="gallary-mobile-img"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-gray-500"></div> */}
        </div>
      </div>
    </section>
  );
};

export default MobileGallary;
