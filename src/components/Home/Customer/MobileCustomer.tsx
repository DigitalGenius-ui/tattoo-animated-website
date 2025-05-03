"use client";

import React, { useRef } from "react";
import { customerImages } from "./data";
import clsx from "clsx";
import { data } from "./data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spacer from "@/utils/Spacer";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const MobileCustomer = () => {
  const container = useRef(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const targets = imagesRef.current.slice(1);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: `top top`,
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(
      targets,
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        scale: 1.2,
        stagger: 0.8,
      },
      "a"
    );
  }, []);
  return (
    <section className="2xl:hidden">
      <h1 className="uppercase font-[--font-playfair] text-white text-center text-[10vw]">
        testimonials
      </h1>
      <Spacer className="!h-[8rem]" />
      <div ref={container} className="relative">
        <div className="w-full h-[35vh] sticky top-0">
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
        <div className="text-white w-[80%] overflow-hidden !mx-auto -z-1 relative">
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
