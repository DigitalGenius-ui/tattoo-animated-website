"use client";

import React, { useRef } from "react";
import { customerImages } from "./data";
import clsx from "clsx";
import { data } from "./data";
import Spacer from "@/utils/Spacer";
import Image from "next/image";
import { useCustomerMobileAnimation } from "@/AnimationHooks/useCustomerAnimation";

const MobileCustomer = () => {
  const container = useRef(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useCustomerMobileAnimation({ container, imagesRef });
  return (
    <section className="2xl:hidden !overflow-x-visible">
      <h1 className="uppercase font-[--font-playfair] text-white text-center text-[10vw]">
        testimonials
      </h1>
      <Spacer className="!h-[8rem]" />
      <div ref={container} className="!relative">
        <div className="w-full h-[35vh] sticky top-0 z-2 !overflow-hidden">
          {customerImages.map((img, i) => (
            <div
              ref={(el) => {
                if (el) imagesRef.current[i] = el;
              }}
              key={`image_${i}`}
              className={clsx(
                `w-full h-full absolute top-0 left-0 bg-no-repeat bg-cover bg-center`
              )}
              style={{
                clipPath:
                  i !== 0 ? "polygon(0 0, 100% 0, 100% 0, 0 0)" : undefined,
              }}
            >
              <Image
                width={200}
                height={200}
                src={img}
                alt="animated-img"
                className={clsx(`w-full h-full object-cover ${`!z-${i}`}`)}
              />
            </div>
          ))}
        </div>
        <div className="text-white w-[80%] overflow-hidden !mx-auto z-1 relative">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex gap-[2rem] s:gap-[4rem] !py-[20vh] border-b border-white/80"
            >
              <h1 className="uppercase text-[5vw]">{item.name}</h1>
              <p className="darkWhite text-[3vw]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileCustomer;
