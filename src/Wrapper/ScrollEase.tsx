"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollEase = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return <>{children}</>;
};

export default ScrollEase;
