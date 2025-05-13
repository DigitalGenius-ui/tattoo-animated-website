"use client";

import React, { useEffect, useRef, useState } from "react";
import "./gallary.css";
import {
  DraftingCompass,
  Fan,
  Flower,
  Flower2,
  LoaderPinwheel,
  Signature,
} from "lucide-react";
import MobileFilterBtn from "./MobileFilterBtn";

const iconStyle = {
  width: "clamp(16px, 1vw, 24px)",
  height: "clamp(16px, 2vw, 24px)",
};

const categories = [
  {
    label: "Fineline",
    icon: <Flower style={iconStyle} />,
  },
  { label: "Mandala", icon: <Fan style={iconStyle} /> },
  { label: "Lettering", icon: <Signature style={iconStyle} /> },
  { label: "All" },
  { label: "Floral", icon: <Flower2 style={iconStyle} /> },
  { label: "Dotwork", icon: <LoaderPinwheel style={iconStyle} /> },
  { label: "Traditional", icon: <DraftingCompass style={iconStyle} /> },
];

type GallaryFilterBtnType = {
  activeBtn: { label: string; index: number };
  handleFilter: (label: string, index: number) => void;
};

const GallaryFilterBtn = ({
  activeBtn,
  handleFilter,
}: GallaryFilterBtnType) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef([] as (HTMLButtonElement | null)[]);
  const [lines, setLines] = useState<
    { x1: number; y1: number; angle: number; length: number }[] | null[]
  >([]);

  const [btnHover, setBtnHover] = useState({
    index: 3,
    hover: false,
  });

  useEffect(() => {
    const updateLines = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const centerX = containerRect.width / 2;
      const centerY = 0;

      const widenFactor = 0.001; // try 0.1 - 0.3 for different spreads

      const newLines = buttonRefs.current.map((btn, i) => {
        if (!btn) return null;

        const rect = btn.getBoundingClientRect();
        const x = rect.left + rect.width / 2 - containerRect.left;
        const y = rect.top - containerRect.top;

        const dx = x - centerX;
        const dy = y - centerY;

        let angle = Math.atan2(dy, dx);

        // Shift angle slightly left or right depending on index
        const mid = (buttonRefs.current.length - 1) / 2;
        const spreadOffset = (i - mid) * widenFactor;
        angle += spreadOffset;

        const rawLength = Math.sqrt(dx * dx + dy * dy);
        const shortenedLength = Math.max(rawLength - 13, 0);

        return {
          x1: centerX,
          y1: centerY,
          angle: angle * (180 / Math.PI), // convert to degrees for CSS
          length: shortenedLength,
        };
      });

      setLines(
        newLines.filter(
          (
            line
          ): line is {
            x1: number;
            y1: number;
            angle: number;
            length: number;
          } => line !== null
        )
      );
    };

    updateLines();

    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, []);

  return (
    <>
      <MobileFilterBtn handleFilter={handleFilter} />
      {/* filter buttons  */}
      <div className="hidden 2xl:block border-t border-white/50 w-full relative">
        <div
          className="relative w-[90%] !mx-auto h-[160px] flex items-end justify-between"
          ref={containerRef}
        >
          {/* Dynamic lines from center to buttons */}
          {lines.map(
            (line, i) =>
              line && (
                <div
                  key={i}
                  className="absolute h-[1px] bg-white/30"
                  style={{
                    top: `${line.y1}px`,
                    left: `${line.x1}px`,
                    width: `${line.length}px`,
                    transform: `rotate(${line.angle}deg)`,
                    transformOrigin: "left center",
                  }}
                />
              )
          )}

          {/* hover line  */}
          {lines.map(
            (line, i) =>
              line && (
                <div
                  key={i}
                  className="absolute h-[1px] bg-white"
                  style={{
                    top: `${line.y1}px`,
                    left: `${line.x1}px`,
                    transform: `rotate(${line.angle}deg)`,
                    transformOrigin: "left center",
                    transition: "width 0.3s ease",
                    width:
                      (btnHover.hover && btnHover.index === i) ||
                      activeBtn.index === i
                        ? `${line.length}px`
                        : `0px`,
                  }}
                />
              )
          )}

          {/* Buttons with refs */}
          {categories.map((cat, i) => (
            <button
              key={i}
              onMouseEnter={() => {
                setBtnHover({ index: i, hover: true });
              }}
              onMouseLeave={() => {
                setBtnHover({ index: i, hover: false });
              }}
              ref={(el) => {
                buttonRefs.current[i] = el;
              }}
              onClick={() => handleFilter(cat.label, i)}
              className={`text-white/50 px-2 py-2 uppercase flex items-center justify-center gap-1
                transition-all duration-300 cursor-pointer text-[clamp(0.9rem,1vw,1.5rem)] ${
                  activeBtn.index === i ? "!text-white" : ""
                }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default GallaryFilterBtn;
