"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
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
      className="h-[100vh] 2xl:h-[200vh] flex items-center justify-center !relative"
    >
      <Image
        width={1000}
        height={1000}
        src={"/about/das-studio6.jpg"}
        alt="about-tatto-demo"
        className="aboutTattoDemoImg fixed inset-0 w-full h-[140vh] object-cover -z-1"
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
