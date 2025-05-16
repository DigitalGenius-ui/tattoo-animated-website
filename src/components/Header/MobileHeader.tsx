"use client";

import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import data from "@/data.json";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHeaderAnimationMobile } from "@/AnimationHooks/useHeaderAnimation";
import { useScrollDirection } from "@/Hooks/useScrollDirection";

gsap.registerPlugin(ScrollTrigger);

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  const { scrollDirection } = useScrollDirection(30);

  useHeaderAnimationMobile({ toggle });

  return (
    <header
      ref={container}
      className={clsx(
        "2xl:hidden !fixed left-0 right-0 top-0 transition-all duration-300 ease-in-out z-8",
        scrollDirection === "down" && !toggle ? "!-top-[100px]" : "!top-0"
      )}
    >
      <div className="w-[90%] !mx-auto !h-[100px] !flex !items-center !justify-between text-white">
        <Link className="z-10" href="/">
          <h1 className="text-[2.5rem] font-[--font-playfair]">WT</h1>
        </Link>
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
            className="headerCloseBtn absolute scale-0"
          >
            <X size={30} />
          </button>
        </div>
      </div>
      <nav className="navMenu fixed inset-0 bg-neutral-700 z-8 text-white">
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
    </header>
  );
};

export default MobileHeader;
