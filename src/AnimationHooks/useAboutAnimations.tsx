import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

type aboutPropsType = {
  container: React.RefObject<null>;
};

export const useAboutHeroAnimation = ({ container }: aboutPropsType) => {
  useGSAP(() => {
    gsap.fromTo(
      ".aboutText",
      { opacity: 0, y: 30, stagger: 0.2, duration: 1 },
      { opacity: 1, y: 1, stagger: 0.2, duration: 1 }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        scrub: true,
      },
    });

    tl.to(".aboutHeroText", {
      y: -200,
      duration: 2,
      opacity: 0,
    });

    tl.to(".aboutTexts", {
      y: 20,
    });
  });
};

export const useAboutDetailsAnimation = ({ container }: aboutPropsType) => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
        scrub: true,
      },
    });

    tl.to(
      ".prism",
      {
        rotate: 180,
      },
      "a"
    );
    tl.to(
      ".shine",
      {
        rotate: -180,
      },
      "a"
    );
  }, []);
};
