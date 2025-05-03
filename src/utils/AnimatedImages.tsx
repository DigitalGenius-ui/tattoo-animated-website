"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

type AnimatedImagesProps = {
  images: string[];
  timeline: React.RefObject<gsap.core.Timeline>;
};

const AnimatedImages = ({ images, timeline }: AnimatedImagesProps) => {
  const imageRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    const targets = imageRef.current.slice(1);

    timeline.current.to(
      targets,
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        scale: 1.2,
        stagger: 0.8,
      },
      "a"
    );
  }, [timeline]);
  return (
    <div className="flex-1 overflow-hidden relative h-[100vh]">
      {images.map((img, i) => (
        <div
          key={`image_${i}`}
          ref={(el) => {
            if (el) imageRef.current[i] = el;
          }}
          style={{
            clipPath: i !== 0 ? "polygon(0 0, 100% 0, 100% 0, 0 0)" : undefined,
          }}
          className="w-full h-full absolute top-0 left-0"
        >
          <Image
            width={200}
            height={200}
            src={img}
            alt="animated-img"
            className={clsx(`w-full h-full object-cover ${`!z-${i}`}`)}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedImages;
