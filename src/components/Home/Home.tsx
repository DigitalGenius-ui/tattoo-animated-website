"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Services from "../Services/Services";
import Gallary from "./Gallary/Gallary";
import Header from "./Header/Header";
import Lenis from "lenis";
import CustomerAgree from "../Customer/CustomerAgree";
import Contact from "../Contact/Contact";

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
    <section>
      <div className="bg-no-repeat bg-cover hero-bg relative">
        <Header />
        <Hero />
      </div>
      <Services />
      <Gallary />
      <CustomerAgree />
      <Contact />
    </section>
  );
};

export default Home;
