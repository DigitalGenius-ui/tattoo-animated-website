"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const useHeaderAnimation = ({
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

export default useHeaderAnimation;
