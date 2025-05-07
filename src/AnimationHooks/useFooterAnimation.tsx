"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const useFooterAnimation = ({
  container,
}: {
  container: React.RefObject<null>;
}) => {
  useGSAP(() => {
    gsap.set(".line-top", { y: -50, opacity: 0 });
    gsap.set(".line-bottom", { y: 50, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    tl.to(
      ".big-circle",
      {
        scale: 1,
      },
      "a"
    );

    tl.to(
      ".small-circle",
      {
        rotate: -360,
        scale: 1,
      },
      "a"
    );
    tl.to(
      ".big-recangle",
      {
        rotate: -360,
        scale: 1,
      },
      "a"
    );
    tl.to(
      ".small-recangle",
      {
        rotate: 360,
        scale: 1,
      },
      "a"
    );
    tl.to(
      ".line-top",
      {
        y: 0,
        opacity: 1,
        delay: 0.2,
      },
      "a"
    );
    tl.to(
      ".line-bottom",
      {
        y: 0,
        opacity: 1,
        delay: 0.2,
      },
      "a"
    );
  }, []);
};

export default useFooterAnimation;
