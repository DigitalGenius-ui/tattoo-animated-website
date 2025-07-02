import AboutDetails from "@/components/About/AboutDetails";
import AboutFindTatto from "@/components/About/AboutFindTatto";
import AboutHero from "@/components/About/AboutHero";
import AboutStudio from "@/components/About/AboutStudio";
import AboutTattoDemo from "@/components/About/AboutTattoDemo";
import Footer from "@/components/Home/Footer/Footer";
import Spacer from "@/utils/Spacer";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: ` Discover bold, custom tattoo artistry at Tatto Youth — a 
  modern tattoo company specializing in unique designs, fine-line work, 
  and immersive experiences. Explore our portfolio through a visually stunning, 
  scroll-animated website built with cutting-edge web technologies. 
  Whether you're seeking your first ink or adding to your collection, our 
  professional artists turn your vision into skin-deep masterpieces. 
  Located in Melbourne. Book your session today!`,
};

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
