"use client";

import Image from "next/image";
import React, { useRef } from "react";
import "./footer.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const container = useRef(null);
  useGSAP(() => {
    gsap.set(".line-top", { y: -50, opacity: 0 });
    gsap.set(".single-line-top", { y: -50, opacity: 0 });
    gsap.set(".line-bottom", { y: 50, opacity: 0 });
    gsap.set(".single-line-bottom", { y: 50, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    tl.to(
      ".big-circle",
      {
        scale: 1,
      },
      "a"
    );

    tl.to(
      ".small-circle",
      {
        rotate: -360,
        scale: 1,
      },
      "a"
    );
    tl.to(
      ".big-recangle",
      {
        rotate: -360,
        scale: 1,
      },
      "a"
    );
    tl.to(
      ".small-recangle",
      {
        rotate: 360,
        scale: 1,
      },
      "a"
    );
    tl.to(
      ".line-top",
      {
        y: 0,
        opacity: 1,
      },
      "a"
    );
    tl.to(
      ".single-line-top",
      {
        y: 4,
        opacity: 1,
        delay: 0.2,
      },
      "a"
    );
    tl.to(
      ".line-bottom",
      {
        y: 0,
        opacity: 1,
      },
      "a"
    );
    tl.to(
      ".single-line-bottom",
      {
        y: -4,
        opacity: 1,
        delay: 0.2,
      },
      "a"
    );
  }, []);
  return (
    <footer
      ref={container}
      className="h-screen w-full !bg-no-repeat !bg-cover !bg-center overflow-hidden"
      style={{
        background: "url(/footer/footer-bg.jpg)",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <Image
          className="footer-img big-circle scale-0 3xl:size-[50rem] 4xl:size-[80rem] 5xl:size-[70rem]
          6xl:size-[100rem]"
          width={400}
          height={400}
          src={"/footer/bigCircle.svg"}
          alt="big-circle"
        />
        <Image
          className="footer-img big-recangle scale-0 3xl:size-[50rem] 4xl:size-[80rem] 5xl:size-[70rem]
          6xl:size-[100rem]"
          width={400}
          height={400}
          src={"/footer/bigRecangle.svg"}
          alt="big-circle"
        />
        <Image
          className="footer-img small-circle scale-0 3xl:size-[50rem] 4xl:size-[80rem] 5xl:size-[70rem]
          6xl:size-[100rem]"
          width={400}
          height={400}
          src={"/footer/smallCircle.svg"}
          alt="big-circle"
        />
        <Image
          className="footer-img small-recangle scale-0 3xl:size-[50rem] 4xl:size-[80rem] 5xl:size-[70rem]
          6xl:size-[100rem]"
          width={400}
          height={400}
          src={"/footer/smallRecangle.svg"}
          alt="big-circle"
        />
      </div>
      <Image
        width={400}
        height={100}
        src="/footer/lineTop.svg"
        alt="line-top"
        className="absolute top-6 object-center line-top 3xl:size-[40rem]"
      />
      <Image
        width={400}
        height={400}
        src="/footer/singleLineTop.svg"
        alt="line-top"
        className="absolute top-6 3xl:top-1 4xl:-top-9 5xl:-top-5 6xl:-top-20 object-center single-line-top 
        3xl:size-[50rem] 4xl:size-[80rem] 5xl:size-[70rem] 6xl:size-[100rem]"
      />
      <Image
        width={400}
        height={100}
        src="/footer/lineBottom.svg"
        alt="line-bottom"
        className="absolute bottom-6 object-center line-bottom 3xl:size-[40rem]"
      />
      <Image
        width={400}
        height={400}
        src="/footer/singleLineBottom.svg"
        alt="line-bottom"
        className="absolute bottom-5.8 object-center single-line-bottom 
        3xl:size-[50rem] 4xl:size-[80rem] 5xl:size-[70rem] 6xl:size-[100rem]"
      />
      <div
        className="absolute top-[35%] 3xl:top-[40%] group cursor-pointer w-[50rem] 
      3xl:w-[70rem] 5xl:w-[100rem] text-center"
      >
        <p
          className="uppercase text-white/40 text-center group-hover:scale-105 6xl:text-[2rem]
            group-hover:tracking-widest group-hover:text-white transition-all duration-500"
        >
          next page
        </p>
        <div
          className="w-0 right-0 group-hover:left-0 group-hover:w-full transition-all duration-500
            h-[1px] bg-[#b9b9b9] absolute top-[57%] footer-line z-0"
        />
        <h1 className="uppercase text-white text-9xl 4xl:text-[11rem] 6xl:text-[15rem] font-[--font-playfair] z-10 relative">
          about me
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
