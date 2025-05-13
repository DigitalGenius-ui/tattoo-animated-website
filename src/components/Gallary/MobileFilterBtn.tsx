"use client";

import gsap from "gsap";
import { SlidersHorizontal } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import {
  DraftingCompass,
  Fan,
  Flower,
  Flower2,
  LoaderPinwheel,
  Signature,
  Check,
} from "lucide-react";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";

const iconStyle = {
  width: "4vw",
  height: "4vw",
};

const categories = [
  { label: "All" },
  {
    label: "Fineline",
    icon: <Flower style={iconStyle} />,
  },
  { label: "Mandala", icon: <Fan style={iconStyle} /> },
  { label: "Lettering", icon: <Signature style={iconStyle} /> },
  { label: "Floral", icon: <Flower2 style={iconStyle} /> },
  { label: "Dotwork", icon: <LoaderPinwheel style={iconStyle} /> },
  { label: "Traditional", icon: <DraftingCompass style={iconStyle} /> },
];

type GallaryFilterBtnType = {
  handleFilter: (label: string, index: number) => void;
};

const MobileFilterBtn = ({ handleFilter }: GallaryFilterBtnType) => {
  const [activeBtn, setActiveBtn] = useState("All");
  const [openFilter, setOpenFilter] = useState(false);
  const openFilterRef = useRef<gsap.core.Timeline>({} as gsap.core.Timeline);

  useGSAP(() => {
    gsap.set(".category", { x: "100%", opacity: 0 });
    openFilterRef.current = gsap
      .timeline({ paused: true })
      .to(".line", {
        width: "50%",
        stagger: 0.1,
        duration: 0.5,
        delay: 0.4,
        ease: "power4.inOut",
      })
      .to(".category", {
        x: 0,
        duration: 1.75,
        opacity: 1,
        ease: "power4.inOut",
      });
  }, []);
  useEffect(() => {
    if (openFilter) {
      openFilterRef.current.play();
    } else {
      openFilterRef.current.reverse();
    }
  }, [openFilter]);

  return (
    <section className="block 2xl:hidden border-t border-white/50">
      <button
        onClick={() => setOpenFilter(true)}
        className="text-white uppercase flex items-center justify-center gap-2 
        !mx-auto !mt-[4rem] cursor-pointer"
      >
        <span className="darkWhite">
          <SlidersHorizontal style={iconStyle} />
        </span>
        <h1 className="text-[clamp(1rem,3vw,2.5rem)] tracking-wide">
          categories
        </h1>
      </button>
      <div className="category darkBg !fixed !inset-0 !z-20">
        <button
          onClick={() => setOpenFilter(false)}
          style={{
            transition: `all 1s cubic-bezier(0.65, 0, 0.35, 1)`,
          }}
          className="size-[12vw] bg-neutral-800 absolute top-5 right-5 rounded-full
            flex items-center justify-center cursor-pointer hover:rotate-90"
        >
          <span className="line absolute w-0 h-[1px] bg-white rotate-45" />
          <span className="line absolute w-0 h-[1px] bg-white -rotate-45" />
        </button>
        <h1
          className="text-[clamp(2rem,10vw,5rem)] tracking-wide darkWhite 
            text-center !mt-[15vh] !mb-[5vh] uppercase font-[--font-playfair]"
        >
          categories
        </h1>
        <div className="w-[90%] !mx-auto !space-y-2 md:!space-y-10">
          {categories.map((item, i) => (
            <button
              onClick={() => {
                handleFilter(item.label, i);
                setActiveBtn(item.label);
                setOpenFilter(false);
              }}
              key={item.label}
              className={clsx(
                `w-full border-b border-white/40 flex items-center 
                justify-between text-white/40 relative transition-all duration-500`,
                activeBtn === item.label && "!text-white"
              )}
            >
              <div
                className={clsx(
                  "w-0 absolute bottom-0 left-0 right-0 h-[1px] bg-white transition-all duration-500",
                  activeBtn === item.label && "w-full"
                )}
              />
              <div className="flex items-center gap-2 text-[3.5vw] !py-4">
                {item.icon}
                {item.label}
              </div>
              <span>
                <Check style={iconStyle} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileFilterBtn;
