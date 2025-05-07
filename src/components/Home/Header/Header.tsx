"use client";

import React, { useRef } from "react";
import data from "@/data.json";
import Link from "next/link";
import "./header.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import MobileHeader from "./MobileHeader";
import useHeaderAnimation from "@/AnimationHooks/useHeaderAnimation";

const Header = () => {
  const pathName = usePathname();

  const container = useRef(null);
  useHeaderAnimation({ container });
  return (
    <>
      <MobileHeader />
      <header
        ref={container}
        className="hidden 2xl:flex items-center text-white capitalize z-10 
        absolute top-0 left-0 right-0"
      >
        <div className="!flex !items-center !justify-between w-[90%] !mx-auto h-[6vw]">
          <h1 className="text-[3vw] font-[--font-playfair]">WT</h1>
          <nav className="flex items-center gap-4">
            {data.nav.map((item) => (
              <div key={item.name} className="relative text-[1.2vw]">
                <Link
                  className={clsx(`link`, item.path === pathName && "active")}
                  key={item.name}
                  href={item.path}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="relative">
              <a href="#" className="grid place-items-center link">
                <Image
                  width={120}
                  height={120}
                  src={"/insta.svg"}
                  alt="instagram-icon"
                  className="w-4 h-4 4xl:w-6 4xl:h-6"
                />
              </a>
            </div>
          </nav>

          <Link
            href="#"
            className="btn btn-1 border border-gray-500 !py-[0.3rem]"
          >
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            <div className="flex items-center gap-1">
              <Image
                width={120}
                height={120}
                src={"/date.svg"}
                alt="instagram-icon"
                className="w-4 h-4 !mt-[0.2rem]"
              />
              <span>Contact</span>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
