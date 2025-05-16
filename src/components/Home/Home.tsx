import React from "react";
import Hero from "./Hero/Hero";
import Services from "../Services/Services";
import Gallary from "./Gallary/Gallary";
import Header from "../Header/Header";
import CustomerAgree from "./Customer/CustomerAgree";
import Contact from "./Contact/Contact";
import Spacer from "@/utils/Spacer";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <section className="darkBg">
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
      <Spacer className="!h-[10rem] 2xl:block 4xl:!h-[8rem]" />
      <Footer title="about me" path="/about" />
    </section>
  );
};

export default Home;
