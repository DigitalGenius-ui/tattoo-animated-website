"use client";

import React from "react";
import "./service.css";
import Image from "next/image";
import Spacer from "@/utils/Spacer";

const MobileService = () => {
  return (
    <section className="2xl:hidden relative w-[95%] !mx-auto">
      <Spacer className="h-[5rem] xs:h-[12rem] 2xl:!h-[18rem]" />
      <div className=" w-full">
        <Image
          width={400}
          height={400}
          src="/mobile-service.png"
          alt="service-images"
          className="hidden xs:block w-full"
        />
        <Image
          width={400}
          height={400}
          src="/mobile-service-small.png"
          alt="service-images"
          className="w-full xs:hidden"
        />
      </div>
      <div className="!space-y-12 !px-12 !pt-12">
        <div
          className="text-white text-[10vw] xs:text-[12vw] w-full 
          font-[--font-playfair] uppercase leading-[1]"
        >
          <h1>Passion and</h1>
          <h1 className="text-right">precision</h1>
        </div>
        <p className="text-white/50 w-[70%] text-[3vw] justify-self-end">
          Hey, I&apos;m Nicki, and I&apos;ve been tattooing in my studio in
          Düsseldorf since 2017. My expertise lies in mandala and traditional
          styles, but I&apos;m always open to new creative ideas so we can find
          your perfect tattoo together.
        </p>
      </div>
      <Spacer className="h-[5rem] xs:h-[12rem] 2xl:!h-[18rem]" />
    </section>
  );
};

export default MobileService;
