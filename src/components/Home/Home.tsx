"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Services from "../Services/Services";
import Gallary from "./Gallary/Gallary";
import Header from "./Header/Header";
import Lenis from "lenis";
import CustomerAgree from "./Customer/CustomerAgree";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Spacer from "@/utils/Spacer";

import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <div className="bg-no-repeat bg-cover hero-bg relative z-10">
        <Header />
        <Hero />
      </div>
      <Spacer className="hidden 2xl:block !h-[8rem] 6xl:!h-[20rem]" />
      <Services />
      <Spacer className="hidden 2xl:block !h-[25rem] 3xl:!h-[35rem] 4xl:!h-[45rem] 6xl:!h-[60rem]" />
      <Gallary />
      <Spacer className="!h-[10rem]" />
      <CustomerAgree />
      <Spacer className="!h-[10rem]" />
      <Contact />
      <Spacer className="!h-[10rem]" />
      <Spacer className="hidden 2xl:block !h-[5rem] 4xl:!h-[8rem]" />
      <Footer />
    </>
  );
};

export default Home;
