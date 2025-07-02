import Gallary from "@/components/Gallary/Gallary";
import Footer from "@/components/Home/Footer/Footer";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gallary",
  description: ` Discover bold, custom tattoo artistry at Tatto Youth — a 
  modern tattoo company specializing in unique designs, fine-line work, 
  and immersive experiences. Explore our portfolio through a visually stunning, 
  scroll-animated website built with cutting-edge web technologies. 
  Whether you're seeking your first ink or adding to your collection, our 
  professional artists turn your vision into skin-deep masterpieces. 
  Located in Melbourne. Book your session today!`,
};

const GallaryPage = () => {
  return (
    <>
      <Gallary />
      <Footer title="about me" path="/about" />
    </>
  );
};

export default GallaryPage;
