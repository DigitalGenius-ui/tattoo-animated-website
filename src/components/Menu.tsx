"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const links = [
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
  { title: "lab", path: "/lab" },
];

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const container = useRef(null);

  const tl = useRef<gsap.core.Timeline>({} as gsap.core.Timeline);
  const linkRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.set(".menu_link", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu_link", {
          y: 0,
          duration: 1.5,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -1,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (openMenu) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [openMenu]);

  return (
    <section className="header fixed top-0 left-0 right-0 z-10">
      <header
        ref={container}
        className="w-[90%] mx-auto flex justify-between items-center h-[100px]"
      >
        <h1 className="uppercase font-bold z-10">logo</h1>
        <button
          onClick={() => setOpenMenu((prev) => !prev)}
          className="uppercase font-bold cursor-pointer hover:opacity-70 z-10"
        >
          {openMenu ? "close" : "menu"}
        </button>
        <nav className="fixed top-0 left-0 w-screen h-screen bg-green-600 open_menu menu-overlay z-1">
          <div className="w-[60%] mx-auto flex flex-col pt-[8rem]">
            {links.map((link, index) => (
              <div
                key={link.title}
                className="overflow-hidden"
                ref={(el) => {
                  linkRefs.current[index] = el;
                }}
              >
                <Link
                  className="inline-block text-6xl uppercase menu_link"
                  onClick={() => setOpenMenu(false)}
                  href={link.path}
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </header>
    </section>
  );
};

export default Menu;
