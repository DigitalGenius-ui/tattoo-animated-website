"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

type servicePropsType = {
  container: React.RefObject<null>;
  text1: React.RefObject<null>;
  text2: React.RefObject<null>;
  text3: React.RefObject<null>;
  timeline: React.RefObject<gsap.core.Timeline>;
};

export const useServiceAnimation = ({
  container,
  text1,
  text2,
  text3,
  timeline,
}: servicePropsType) => {
  const imageContainer = useRef(null);
  useGSAP(() => {
    gsap.set(text1.current, { x: 50, opacity: 0 });
    gsap.set(text2.current, { x: -50, opacity: 0 });
    gsap.set(text3.current, { x: 50, opacity: 0 });
    gsap.set(imageContainer.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });

    tl.to(
      text1.current,
      {
        x: 0,
        opacity: 1,
        duration: 1,
      },
      "a"
    );
    tl.to(
      text2.current,
      {
        x: 0,
        opacity: 1,
        duration: 1,
      },
      "a"
    );
    tl.to(
      text3.current,
      {
        x: 0,
        opacity: 1,
        duration: 1,
      },
      "a"
    );
    tl.to(
      imageContainer.current,
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      "a"
    );

    const tl2 = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom +60%",
        scrub: true,
        pin: true,
      },
    });

    timeline.current = tl2;
  }, []);
};
