import AboutDetails from "@/components/About/AboutDetails";
import AboutFindTatto from "@/components/About/AboutFindTatto";
import AboutHero from "@/components/About/AboutHero";
import AboutStudio from "@/components/About/AboutStudio";
import AboutTattoDemo from "@/components/About/AboutTattoDemo";
import Footer from "@/components/Home/Footer/Footer";
import Spacer from "@/utils/Spacer";
import React from "react";

const AboutPage = () => {
  return (
    <section className="!overflow-x-hidden">
      <AboutHero />
      <AboutDetails />
      <Spacer className="darkBg h-[8rem] 2xl:!h-[15rem] 6xl:h-[20rem]" />
      <AboutStudio />
      <Spacer className="darkBg h-[8rem] 2xl:!h-[5rem] 4xl:h-0 5xl:h-[8rem] 6xl:h-[20rem]" />
      <AboutTattoDemo />
      <Spacer className="darkBg h-[8rem] md:!h-[10rem] 4xl:h-0 5xl:h-[8rem] 6xl:h-[20rem]" />
      <AboutFindTatto />
      <Spacer className="darkBg h-[8rem] md:!h-[10rem] 4xl:h-0 5xl:h-[8rem] 6xl:h-[20rem]" />
      <Footer title="gallary" path="/gallary" />
    </section>
  );
};

export default AboutPage;
