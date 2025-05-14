"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

type refType = React.RefObject<null>;

type CustomerDeskAnimatiomProps = {
  container: refType;
  text1: refType;
  text2: refType;
  postRef: refType;
  svgParent: refType;
  svgRef: refType;
  timeline: React.RefObject<gsap.core.Timeline>;
};

export const useCustomerAnimation = ({
  container,
  text1,
  text2,
  postRef,
  svgParent,
  svgRef,
  timeline,
}: CustomerDeskAnimatiomProps) => {
  useGSAP(
    () => {
      gsap.set(text1.current, { x: 100, opacity: 0 });
      gsap.set(text2.current, { x: -100, opacity: 0 });
      gsap.set(postRef.current, { y: 100, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "-70% top",
          toggleActions: "play none none none",
        },
      });
      tl.to(text1.current, { x: 0, opacity: 1, duration: 1 });
      tl.to(text2.current, { x: 0, opacity: 1, duration: 1 });
      tl.to(postRef.current, { y: 0, opacity: 1, duration: 1, delay: -1.2 });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: svgParent.current,
          start: `top top`,
          end: "+=1600",
          scrub: true,
          pin: true,
        },
      });

      timeline.current = tl2;

      tl2.to(
        svgRef.current,
        {
          strokeDashoffset: 0,
          duration: 1.5,
        },
        "a"
      );

      tl2.fromTo(
        ".texts",
        {
          yPercent: 0,
          duration: 1,
          stagger: 0.2,
        },
        {
          yPercent: -200,
          duration: 1,
          stagger: 0.2,
        },
        "a"
      );
    },
    { scope: container }
  );
};

type CustomerMobileAnimatiomProps = {
  imagesRef: React.RefObject<(HTMLDivElement | null)[]>;
  container: refType;
};
export const useCustomerMobileAnimation = ({
  imagesRef,
  container,
}: CustomerMobileAnimatiomProps) => {
  useGSAP(() => {
    const targets = imagesRef.current.slice(1);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: `top top`,
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(
      targets,
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        scale: 1.2,
        stagger: 0.8,
      },
      "a"
    );
  }, []);
};
