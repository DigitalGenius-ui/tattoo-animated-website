"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

type GallaryAnimationProps = {
  imageRef: React.RefObject<(HTMLDivElement | null)[]>;
  nameRef: React.RefObject<null>;
  containerRef: React.RefObject<null>;
};

export const useGallaryAnimation = ({
  imageRef,
  nameRef,
  containerRef,
}: GallaryAnimationProps) => {
  useGSAP(() => {
    gsap.set(imageRef?.current[3], { zIndex: 10 });
    gsap.set(nameRef.current, { y: 10, opacity: 0 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        scrub: true,
        pin: true,
      },
    });

    tl.to(
      imageRef.current[3],
      {
        y: -25,
        scale: 3.1,
      },
      "a"
    );

    tl.to(
      imageRef.current[0],
      {
        scale: 1.5,
        opacity: 0,
        y: -400,
      },
      "a"
    );
    tl.to(
      imageRef.current[1],
      {
        scale: 1.5,
        opacity: 0,
        x: 700,
      },
      "a"
    );
    tl.to(
      imageRef.current[2],
      {
        scale: 1.5,
        opacity: 0,
        x: -700,
      },
      "a"
    );
    tl.to(
      imageRef.current[4],
      {
        scale: 1.5,
        opacity: 0,
        y: 700,
      },
      "a"
    );

    tl.to(nameRef.current, {
      opacity: 1,
      y: 0,
    });

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, []);
};

type MobileGallaryImgPropsType = {
  container: React.RefObject<null>;
  middleImg: React.RefObject<null>;
  middleImgDiv: React.RefObject<null>;
  imagesRef: React.RefObject<(HTMLDivElement | null)[]>;
};

export const useMobileGallaryAnimation = ({
  container,
  middleImg,
  imagesRef,
  middleImgDiv,
}: MobileGallaryImgPropsType) => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=1800",
        scrub: true,
        pin: true,
      },
    });

    tl.to(
      middleImg.current,
      {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.3,
      },
      "a"
    );

    tl.to(
      middleImgDiv.current,
      {
        scale: 3.1,
        y: -40,
      },
      "a"
    );

    tl.to(
      imagesRef.current[0],
      {
        scale: 2,
        y: -1000,
      },
      "a"
    );

    tl.to(
      imagesRef.current[1],
      {
        scale: 2,
        x: 800,
        y: -800,
      },
      "a"
    );

    tl.to(
      imagesRef.current[2],
      {
        scale: 2,
        x: -700,
        y: 800,
      },
      "a"
    );

    tl.to(
      imagesRef.current[3],
      {
        scale: 2,
        y: 800,
      },
      "a"
    );

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, []);
};
