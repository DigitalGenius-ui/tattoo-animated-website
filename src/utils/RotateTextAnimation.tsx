"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const RotateTextAnimation = ({
  text,
  ref,
  delay,
}: {
  text: string;
  ref: React.RefObject<null>;
  delay: number;
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.set(textRef.current, { rotateY: 90, x: 70, opacity: 0 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "-40% top",
        end: "bottom 50%",
        scrub: true,
      },
    });

    tl.to(
      textRef.current,
      {
        rotateY: 0,
        x: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: "power4.inOut",
      },
      "a"
    );
  }, []);
  return (
    <div className="rotatetext" ref={textRef}>
      {text}
    </div>
  );
};

export default RotateTextAnimation;
