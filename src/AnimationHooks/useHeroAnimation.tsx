"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

type heroAnimationProps = {
  plantRef: React.RefObject<null>;
  elliRef: React.RefObject<null>;
  elliBgRef: React.RefObject<null>;
  container: React.RefObject<null>;
  textRef: React.RefObject<null>;
};

export const useHeroAnimation = ({
  plantRef,
  elliRef,
  elliBgRef,
  container,
  textRef,
}: heroAnimationProps) => {
  useGSAP(() => {
    gsap.set(plantRef.current, { y: 60, opacity: 0 });
    gsap.set(elliRef.current, { y: 60, opacity: 0 });
    gsap.set(elliBgRef.current, { y: 40, opacity: 0 });

    gsap.to(plantRef.current, {
      y: 0,
      opacity: 1,
      delay: 1,
    });
    gsap.to(elliRef.current, {
      y: 0,
      opacity: 1,
      delay: 0.8,
    });
    gsap.to(elliBgRef.current, {
      y: 0,
      opacity: 1,
      delay: 0.6,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "80% 50%",
        scrub: true,
      },
    });

    tl.to(
      textRef.current,
      {
        opacity: 0,
      },
      "a"
    );
    tl.to(
      plantRef.current,
      {
        scale: 1.2,
        y: 850,
      },
      "a"
    );
    tl.to(
      elliBgRef.current,
      {
        scale: 1.2,
        y: 750,
      },
      "a"
    );

    tl.to(
      elliRef.current,
      {
        scale: 1.2,
        y: 550,
      },
      "a"
    );
  }, []);
};

export const useMobileHeroAnimation = ({
  container,
}: {
  container: React.RefObject<null>;
}) => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=1200",
          scrub: true,
        },
      })
      .to(
        ".hero-mobile-bg",
        {
          y: 400,
          scale: 1.4,
        },
        "a"
      );
  }, []);
};
