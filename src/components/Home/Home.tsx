"use client";

import React from "react";
import Hero from "./Hero/Hero";
import Services from "../Services/Services";
import Gallary from "./Gallary/Gallary";
import Header from "./Header/Header";

const Home = () => {
  return (
    <section>
      <div className="bg-no-repeat bg-cover hero-bg relative">
        <Header />
        <Hero />
      </div>
      <Services />
      <Gallary />
    </section>
  );
};

export default Home;
