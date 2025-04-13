import Image from "next/image";
import React from "react";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
];

const Gallary = () => {
  return (
    <section className="!pt-[10rem] w-full flex">
      <div className="bg-[url(/gallery1.jpg)] bg-no-repeat bg-cover w-[60rem] h-[10rem]" />
      <div className="bg-[url(/gallery2.jpg)] bg-no-repeat bg-cover w-[60rem] h-[10rem]" />
      <div className="bg-[url(/gallery3.jpg)] bg-no-repeat bg-cover w-[60rem] h-[10rem]" />
    </section>
  );
};

export default Gallary;
