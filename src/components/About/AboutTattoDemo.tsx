"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const AboutTattoDemo = () => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        scrub: true,
      },
    });

    tl.fromTo(
      ".aboutTattoDemoImg",
      {
        y: 250,
      },
      {
        y: -300,
      }
    );
  }, []);
  return (
    <section
      ref={container}
      className="w-full h-[100vh] 2xl:h-[200vh] !relative flex items-center justify-center !overflow-hidden"
    >
      <div
        className="md:hidden lg:block aboutTattoDemoImg bg-[url(/about/das-studio6.jpg)] -z-1
        bg-cover bg-center bg-no-repeat fixed inset-0 w-full h-[140vh]"
      />
      <div
        className="s:hidden md:block aboutTattoDemoImg bg-[url(/about/das-studio6-tablet.jpg)] -z-1
        bg-cover bg-center bg-no-repeat fixed inset-0 w-full h-[140vh]"
      />
      <div
        className="block s:hidden aboutTattoDemoImg bg-[url(/about/das-studio6-mobile.jpg)] -z-1
        bg-cover bg-center bg-no-repeat fixed inset-0 w-full h-[140vh]"
      />
      <video
        muted
        // loop
        // autoPlay
        playsInline
        className="w-[50%] 2xl:w-[25vw] relative z-10"
      >
        <source src="/about/ueber-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default AboutTattoDemo;
