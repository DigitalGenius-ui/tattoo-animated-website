"use client";

import Image from "next/image";
import React, { useRef } from "react";
import "./footer.css";
import useFooterAnimation from "@/AnimationHooks/useFooterAnimation";
import { useRouter } from "next/navigation";

type FooterProps = {
  title: string;
  path: string;
};

const Footer = ({ title, path }: FooterProps) => {
  const router = useRouter();
  const container = useRef(null);
  useFooterAnimation({ container });
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
          className="footer-img big-circle scale-0 size-[70%] 2xl:size-[35rem] 3xl:size-[50rem] 4xl:size-[80rem] 5xl:size-[70rem]
          6xl:size-[100rem]"
          width={400}
          height={400}
          src={"/footer/bigCircle.svg"}
          alt="big-circle"
        />
        <Image
          className="footer-img big-recangle scale-0 size-[70%] 2xl:size-[35rem] 3xl:size-[50rem] 4xl:size-[80rem] 5xl:size-[70rem]
          6xl:size-[100rem]"
          width={400}
          height={400}
          src={"/footer/bigRecangle.svg"}
          alt="big-circle"
        />
        <Image
          className="footer-img small-circle scale-0 size-[70%] 2xl:size-[35rem] 3xl:size-[50rem] 4xl:size-[80rem] 5xl:size-[70rem]
          6xl:size-[100rem]"
          width={400}
          height={400}
          src={"/footer/smallCircle.svg"}
          alt="big-circle"
        />
        <Image
          className="footer-img small-recangle scale-0 size-[70%] 2xl:size-[35rem] 3xl:size-[50rem] 4xl:size-[80rem] 5xl:size-[70rem]
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
        className="absolute top-[10vh] 2xl:top-6 object-center line-top size-[80%] 3xl:size-[40rem]"
      />
      <Image
        width={400}
        height={100}
        src="/footer/lineBottom.svg"
        alt="line-bottom"
        className="absolute bottom-[10vh] 2xl:bottom-6 object-center line-bottom size-[80%] 3xl:size-[40rem]"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          onClick={() => router.push(path)}
          className="relative group cursor-pointer w-[90%] 2xl:w-[50rem] 3xl:w-[70rem] 5xl:w-[100rem] text-center"
        >
          <p
            className="absolute top-0 2xl:-top-4 w-full text-center uppercase text-white/40 group-hover:scale-105 6xl:text-[2rem]
            group-hover:tracking-widest group-hover:text-white transition-all duration-500"
          >
            next page
          </p>
          <div
            className="w-0 right-0 group-hover:left-0 group-hover:w-full transition-all duration-500
            h-[1px] bg-[#b9b9b9] absolute top-[57%] footer-line z-0"
          />
          <h1
            className="uppercase text-white text-[16vw]
          2xl:text-9xl 4xl:text-[11rem] 6xl:text-[15rem] font-[--font-playfair] z-7 relative"
          >
            {title}
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
