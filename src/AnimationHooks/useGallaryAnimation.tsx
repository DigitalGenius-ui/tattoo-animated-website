"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

type GallaryAnimationProps = {
  imageRef: React.RefObject<(HTMLDivElement | null)[]>;
  nameRef: React.RefObject<null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
};

export const useGallaryAnimation = ({
  imageRef,
  nameRef,
  containerRef,
}: GallaryAnimationProps) => {
  useGSAP(() => {
    gsap.set(imageRef?.current[3], { zIndex: 10 });
    gsap.set(nameRef.current, { y: 10, opacity: 0 });
    gsap.set(".galText", { rotateY: 90, x: 20, opacity: 0 });

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
      ".galText",
      {
        rotateY: 0,
        x: 0,
        opacity: 1,
        stagger: 0.15,
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

    tl.to(
      nameRef.current,
      {
        opacity: 1,
        y: 0,
        delay: 0.1,
      },
      "a"
    );

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, []);
};

type MobileGallaryImgPropsType = {
  container: React.RefObject<null>;
  middleImg: React.RefObject<null>;
  imagesRef: React.RefObject<(HTMLDivElement | null)[]>;
};

export const useMobileGallaryAnimation = ({
  container,
  middleImg,
  imagesRef,
}: MobileGallaryImgPropsType) => {
  useGSAP(() => {
    gsap.set(".line1", { opacity: 0, y: -50 });
    gsap.set(".line2", { opacity: 0, y: 50 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
      },
    });

    tl.to(
      middleImg.current,
      {
        width: "100vw",
        height: "100vh",
      },
      "a"
    );

    tl.to(
      imagesRef.current[0],
      {
        scale: 2,
        y: -600,
      },
      "a"
    );

    tl.to(
      imagesRef.current[1],
      {
        scale: 2,
        x: 700,
        y: -400,
      },
      "a"
    );

    tl.to(
      imagesRef.current[2],
      {
        scale: 2,
        x: -700,
      },
      "a"
    );

    tl.to(
      imagesRef.current[3],
      {
        scale: 2,
        y: 600,
      },
      "a"
    );

    tl.to(
      ".dark-bg",
      {
        opacity: 1,
      },
      "a"
    );
    tl.to(
      ".shape1",
      {
        scale: 1,
        rotate: 135,
      },
      "a"
    );

    tl.to(
      ".shape2",
      {
        scale: 1,
        rotate: -135,
      },
      "a"
    );

    tl.to(
      ".shape3",
      {
        scale: 1,
      },
      "a"
    );

    tl.to(
      ".shape4",
      {
        scale: 1,
        delay: 0.05,
      },
      "a"
    );

    tl.to(
      ".gal-text",
      {
        opacity: 1,
        delay: 0.2,
      },
      "a"
    );

    tl.to(
      ".line1",
      {
        y: 0,
        opacity: 1,
      },
      "a"
    );

    tl.to(
      ".line2",
      {
        y: 0,
        opacity: 1,
      },
      "a"
    );

    return () => {
      tl.scrollTrigger?.kill();
      ScrollTrigger.refresh();
    };
  }, []);
};
