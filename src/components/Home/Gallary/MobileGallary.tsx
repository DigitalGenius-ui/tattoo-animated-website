"use client";

import { useMobileGallaryAnimation } from "@/AnimationHooks/useGallaryAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const images1 = [
  {
    src: "/gallery1.jpg",
    className:
      "w-[70%] h-[150px] xxs:h-[200px] md:h-[280px] lg:h-[350px] object-cover",
  },
  {
    src: "/gallery2.jpg",
    className:
      "w-[35%] h-[100px] xxs:h-[150px] md:h-[200px] lg:h-[250px] object-cover absolute right-0 -bottom-20 xxs:-bottom-30 md:-bottom-40",
  },
];

const images2 = [
  {
    src: "/gallery4.jpg",
    className:
      "w-[35%] h-[100px] xxs:h-[150px] md:h-[200px] lg:h-[250px] object-cover",
  },
  {
    src: "/gallery5.jpg",
    className:
      "w-[70%] h-[150px] xxs:h-[200px] md:h-[280px] lg:h-[350px] object-cover absolute right-0 -bottom-30 xxs:-bottom-40",
  },
];

const MobileGallary = () => {
  const container = useRef(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const middleImg = useRef(null);
  const middleImgDiv = useRef(null);

  useMobileGallaryAnimation({ container, imagesRef, middleImg, middleImgDiv });
  return (
    <section
      ref={container}
      className="2xl:hidden !min-h-screen !overflow-hidden"
    >
      <div className="w-full !relative">
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
        <div className="relative !mr-[1rem] !mt-[19rem] xxs:!mt-[22rem] xs:!mt-[24rem] sm:!mt-[12rem] md:!mt-[24rem] lg:!mt-[38rem]">
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
        <div
          ref={middleImgDiv}
          className="absolute w-[40%] h-[290px] top-[12rem] left-[30%]
          xxs:h-[320px] xxs:top-[18rem]
          md:h-[410px] md:top-[19rem]
          lg:h-[600px] lg:top-[24rem] lg:left-[33%]"
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
      </div>
    </section>
  );
};

export default MobileGallary;
