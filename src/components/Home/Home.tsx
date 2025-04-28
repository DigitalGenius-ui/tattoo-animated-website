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

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();
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
      <Spacer className="!h-[8rem] hidden 2xl:block" />
      <CustomerAgree />
      <Contact />
      <Spacer className="hidden 2xl:block !h-[5rem] 4xl:!h-[8rem]" />
      <Footer />
    </>
  );
};

export default Home;
