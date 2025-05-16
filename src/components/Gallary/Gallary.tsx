"use client";

import React, { useEffect, useState } from "react";
import "./gallary.css";
import GallaryFilterBtn from "./GallaryFilterBtn";
import Image from "next/image";
import { BlurFade } from "../magicui/blur-fade";
import { images } from "@/constent/Gallary";
import gsap from "gsap";

const Gallary = () => {
  const [activeBtn, setActiveBtn] = useState({ label: "all", index: 3 });
  const [filteredImages, setFilteredImages] = useState(images);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFilter = (label: string, i: number) => {
    setActiveBtn({ label, index: i });
    if (label === "All") return setFilteredImages(images);
    const newImges = images.filter((item) => item.cat === label);
    setFilteredImages(newImges);
  };

  const handleSelectImg = (url: string) => {
    setSelectedImage(url);
  };

  useEffect(() => {
    if (selectedImage) {
      gsap.to(".line", {
        width: "50%",
        stagger: 0.1,
        duration: 0.5,
        ease: "power4.inOut",
      });
    }
  }, [selectedImage]);

  return (
    <section className="!w-[90%] !mx-auto !relative">
      <div className="!mt-[8rem]">
        <h1 className="text-center text-white uppercase text-[8vw] font-[--font-playfair]">
          gallary
        </h1>
      </div>
      {/* filter buttons  */}
      <GallaryFilterBtn activeBtn={activeBtn} handleFilter={handleFilter} />
      {/* images  */}
      <div className="columns-2 lg:columns-3 4xl:!columns-4 gap-4 [&>div:not(:first-child)]:!mt-4 !my-[6rem]">
        {filteredImages.map((item, i) => (
          <BlurFade
            delay={0.25 + i * 0.05}
            inView
            key={`item_${i}`}
            className={`w-full h-auto overflow-hidden group`}
          >
            <Image
              onClick={() => handleSelectImg(item.url)}
              width={200}
              height={200}
              src={item.url}
              alt="gallary-images"
              className={`w-full h-auto object-cover group-hover:scale-110 
              transition-all duration-300 ease-in-out cursor-pointer`}
              loading="lazy"
            />
          </BlurFade>
        ))}
      </div>
      {/* open image modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-20">
          <button
            style={{
              transition: `all 1s cubic-bezier(0.65, 0, 0.35, 1)`,
            }}
            className="w-[4rem] h-[4rem] bg-neutral-800 absolute top-5 right-5 rounded-full
            flex items-center justify-center cursor-pointer hover:rotate-90"
            onClick={() => setSelectedImage(null)}
          >
            <span className="line absolute w-0 h-[1px] bg-white rotate-45" />
            <span className="line absolute w-0 h-[1px] bg-white -rotate-45" />
          </button>

          <div className="w-full h-full flex items-center justify-center !p-2 s:!p-0">
            <Image
              width={1000}
              height={1000}
              src={selectedImage || ""}
              alt="gallary-images"
              className={`object-cover w-auto h-auto s:h-[90%]`}
              loading="lazy"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallary;
