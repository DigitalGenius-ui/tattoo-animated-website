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
      <div className="bg-no-repeat bg-cover hero-bg relative">
        <Header />
        <Hero />
      </div>
      <div className="!h-[8rem] 6xl:!h-[20rem]" />
      <Services />
      <div className="!h-[25rem] 3xl:!h-[35rem] 4xl:!h-[45rem] 6xl:!h-[60rem]" />
      <Gallary />
      <div className="!h-[8rem]" />
      <CustomerAgree />
      <Contact />
      <div className="!h-[5rem]" />
      <Footer />
    </>
  );
};

export default Home;
