"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutPages = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      container.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 50%",
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);
  return (
    <>
      <section className="p-32 min-h-[100vh]">hi</section>
      <div ref={container} className="text-black min-h-[100vh]">
        <h1 className="text-4xl pb-5 font-bold uppercase">
          About page is here
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eos
          dolor veritatis aut suscipit! Accusamus, autem aspernatur! Sequi
          tenetur at odit aliquam dolorem eius, rem et earum repellat ratione
          quisquam.
        </p>
      </div>
    </>
  );
};

export default AboutPages;
