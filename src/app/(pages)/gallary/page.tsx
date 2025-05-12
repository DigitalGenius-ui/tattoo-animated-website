import Gallary from "@/components/Gallary/Gallary";
import Footer from "@/components/Home/Footer/Footer";
import React from "react";

const GallaryPage = () => {
  return (
    <>
      <Gallary />
      <Footer title="about me" path="/about" />
    </>
  );
};

export default GallaryPage;
