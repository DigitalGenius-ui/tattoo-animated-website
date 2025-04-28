"use client";

import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { X } from "lucide-react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import data from "@/data.json";
import { usePathname } from "next/navigation";

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);
  const pathName = usePathname();

  const clickRef = useRef<gsap.core.Timeline>({} as gsap.core.Timeline);
  useGSAP(() => {
    clickRef.current = gsap
      .timeline({ paused: true })
      .to(
        ".left-line",
        {
          width: 0,
          left: 0,
          duration: 1,
          ease: "power4.inOut",
        },
        "a"
      )
      .to(
        ".right-line",
        {
          width: 0,
          rigth: 0,
          duration: 1,
          ease: "power4.inOut",
        },
        "a"
      )
      .to(
        ".closeBtn",
        {
          scale: 1,
          duration: 1,
          ease: "power4.inOut",
        },
        "a"
      )
      .to(
        ".navMenu",
        {
          translateX: 0,
          duration: 1,
          ease: "power4.inOut",
        },
        "a"
      )
      .to(
        ".hero",
        {
          x: -300,
          opacity: 0,
          duration: 1,
          ease: "power4.inOut",
        },
        "a"
      );
  }, []);

  useEffect(() => {
    if (toggle) {
      clickRef.current.play();
    } else {
      clickRef.current.reverse();
    }
  }, [toggle]);
  return (
    <header className="2xl:hidden absolute top-0 left-0 right-0">
      <div className="w-[90%] !mx-auto !h-[100px] !flex !items-center !justify-between text-white">
        <h1 className="text-[2.5rem] font-[--font-playfair] z-10">WT</h1>
        {/* humberger menu  */}
        <div className="relative flex items-center justify-center z-10 w-[3rem] h-[3rem]">
          <div
            onClick={() => setToggle(true)}
            className="flex flex-col gap-1 relative w-full h-full"
          >
            <div className="left-line w-full absolute top-[45%] left-0 h-[1px] bg-white" />
            <div className="right-line w-full absolute top-[55%] right-0 h-[1px] bg-white" />
          </div>
          <button
            onClick={() => setToggle(false)}
            className="closeBtn absolute scale-0"
          >
            <X size={30} />
          </button>
        </div>
        <nav className="navMenu fixed inset-0 bg-neutral-700 z-9 translate-x-full">
          <div className="h-full relative flex flex-col gap-4 items-center justify-center font-[--font-playfair]">
            {data.nav.map((item) => (
              <div
                key={item.name}
                className="relative text-[2rem] sm:text-[4rem] uppercase"
              >
                <Link
                  onClick={() => setToggle(false)}
                  className={clsx(`link`, item.path === pathName && "active")}
                  key={item.name}
                  href={item.path}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="relative">
              <a href="#" className="flex items-center gap-4 link">
                <Image
                  width={150}
                  height={150}
                  src={"/insta.svg"}
                  alt="instagram-icon"
                  className="w-4 h-4 4xl:w-6 4xl:h-6"
                />
                <span className="uppercase text-[1.3rem]">instagram</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MobileHeader;
