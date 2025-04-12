"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

const HomePage = () => {
  const container = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      gsap.set(".nameText", { y: 75 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "50% 50%",
          end: "250% 50%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(
        container.current,
        {
          maskSize: "280%",
        },
        "a"
      );

      tl.to(
        ".imgBg",
        {
          backgroundSize: "100%",
        },
        "a"
      );
      tl.to(
        ".container2",
        {
          maskSize: "280%",
        },
        "b"
      );

      tl.to(
        ".imgBg2",
        {
          backgroundSize: "100%",
        },
        "b"
      );

      tl.to(
        ".nameText",
        {
          y: 0,
          delay: 0.1,
        },
        "b"
      );
    },
    { scope: container }
  );
  return (
    <section
      ref={container}
      className="transition"
      style={{
        maskImage: "url('/mask.svg')",
        maskRepeat: "no-repeat",
        maskSize: "0%",
        maskPosition: "center",
        width: "100%",
        height: "100vh",
        zIndex: 0,
      }}
    >
      <div
        style={{ backgroundSize: "130%", backgroundPosition: "center" }}
        className="transition imgBg bg-no-repeat w-[100%] h-[100%] bg-[url(/office1.jpg)]"
      >
        <section
          className="transition container2"
          style={{
            maskImage: "url('/mask.svg')",
            maskRepeat: "no-repeat",
            maskSize: "0%",
            maskPosition: "center",
            width: "100%",
            height: "100vh",
            zIndex: 0,
          }}
        >
          <div
            style={{ backgroundSize: "130%", backgroundPosition: "center" }}
            className="transition imgBg2 bg-no-repeat w-[100%] h-[100%] bg-[url(/office2.jpg)] relative"
          >
            <div className="absolute bottom-30 left-20 overflow-hidden">
              <h1 className="nameText text-4xl text-black font-bold">
                MILAD AMIRI
              </h1>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HomePage;
