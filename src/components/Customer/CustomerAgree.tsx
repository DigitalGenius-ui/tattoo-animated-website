"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import Image from "next/image";
import "./customer.css";

gsap.registerPlugin(ScrollTrigger);

const CustomerAgree = () => {
  const container = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const postRef = useRef(null);

  const svgParent = useRef(null);
  const svgRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(text1.current, { x: 100, opacity: 0 });
      gsap.set(text2.current, { x: -100, opacity: 0 });
      gsap.set(postRef.current, { y: 100, opacity: 0 });
      gsap.set(".img1", { scale: 1.3 });

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
        paused: true,
        scrollTrigger: {
          trigger: svgParent.current,
          start: `top top`,
          end: "+=1800",
          scrub: true,
          pin: true,
        },
      });

      tl2.to(
        svgRef.current,
        {
          strokeDashoffset: 0,
          duration: 2,
        },
        "a"
      );

      tl2.to(
        ".img1",
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          scale: 1,
          duration: 1,
          stagger: 0.8,
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
  return (
    <section ref={container} className="!relative">
      <div
        className="flex items-end justify-end flex-col font-[--font-playfair] 
      text-white text-9xl uppercase"
      >
        <h1 ref={text1} className="rotatetext">
          Customers
        </h1>
        <h1 ref={text2} className="rotatetext">
          agree
        </h1>
      </div>
      <div ref={svgParent} className="!h-[100vh]">
        <svg
          className="w-[32rem] h-[32rem] absolute top-[10%] left-[29.5%]"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#333"
            strokeWidth="0.2"
            fill="none"
          />

          <circle
            ref={svgRef}
            cx="50"
            cy="50"
            r="45"
            stroke="#ffffff27"
            strokeWidth="0.2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="141.3"
            strokeDashoffset="141.3"
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div
          ref={postRef}
          className="!w-[90%] !mx-auto h-full !z-10 relative flex"
        >
          {/* left side  */}
          <div className="flex-1 overflow-hidden relative">
            <div className="relative">
              <Image
                width={200}
                height={200}
                src={"/reviews/reviews-1-desktop.jpg"}
                alt="review-img"
                className="w-[100%] object-fit customerImages"
              />
            </div>
            <div>
              <Image
                width={200}
                height={200}
                src={"/reviews/reviews-2-desktop.jpg"}
                alt="review-img"
                className="img1 !z-1 w-[100%] object-fit customerImages"
              />
            </div>
            <div>
              <Image
                width={200}
                height={200}
                src={"/reviews/reviews-3-desktop.jpg"}
                alt="review-img"
                className="img1 !z-2 w-[100%] object-fit customerImages"
              />
            </div>
          </div>
          {/* right side  */}
          <div className="flex-1 overflow-hidden relative">
            <div className="texts text h-screen flex items-start flex-col justify-center !pl-[10rem]">
              <h1 className="uppercase text-sm text-white/80 !pb-6">andi</h1>
              <p className="text-white/50 text-xs w-[17rem]">
                Nicki is incredibly professional. She took the time to
                understand my idea and transform it into a beautiful tattoo. Her
                empathetic manner immediately put me at ease, and throughout the
                session, she repeatedly checked on my comfort level. The result
                was not only precise but exceeded my expectations. I would
                recommend her to anyone who values ​​quality and precision.
              </p>
            </div>
            <div className="texts text flex flex-col justify-center h-screen  !pl-[10rem]">
              <h1 className="uppercase text-sm text-white/80 !pb-6">Marie</h1>
              <p className="text-white/50 text-xs w-[17rem]">
                I was a little concerned about the pain, but Nicki explained
                everything so well that I immediately relaxed. She showed me
                several designs and made sure I was happy with everything. Her
                precision and patience are remarkable. The tattoo is not only
                beautiful, but also a true work of art. I will definitely go
                back to her.
              </p>
            </div>
            <div className="texts flex flex-col justify-center h-screen !pl-[10rem]">
              <h1 className="uppercase text-sm text-white/80 !pb-6">Vera</h1>
              <p className="text-white/50 text-xs w-[17rem]">
                I felt comfortable with Nicki from the very beginning. Her
                professional approach and precision are impressive. She has a
                knack for putting people at ease, and her studio is very clean
                and welcoming. The tattoo she gave me is exactly what I
                imagined—maybe even better. I recommend her to anyone looking
                for a talented and compassionate tattoo artist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerAgree;
