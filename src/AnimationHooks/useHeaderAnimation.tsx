"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export const useHeaderAnimation = ({
  container,
}: {
  container: React.RefObject<null>;
}) => {
  useGSAP(
    () => {
      gsap.set(container.current, { y: -100, opacity: 0 });
      gsap.to(container.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.4,
      });
    },
    { scope: container }
  );
};

export const useHeaderAnimationMobile = ({ toggle }: { toggle: boolean }) => {
  const clickRef = useRef<gsap.core.Timeline>({} as gsap.core.Timeline);
  useGSAP(() => {
    gsap.set(".navMenu", { translateX: "100%" });
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
          right: 0,
          duration: 1,
          ease: "power4.inOut",
        },
        "a"
      )
      .to(
        ".headerCloseBtn",
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
      );
  }, []);

  useEffect(() => {
    if (toggle) {
      clickRef.current.play();
    } else {
      clickRef.current.reverse();
    }
  }, [toggle]);
};
