"use client";

import React from "react";
import Input from "../../utils/Input";
import RadioInput from "@/utils/RadioInput";

const Contact = () => {
  return (
    <section className="flex !h-screen !w-[90%] !mx-auto !my-[8rem] !text-white">
      <div className="flex-1">
        <h1>Con</h1>
        <h1>tact</h1>
      </div>
      <form className="flex-1 !space-y-4">
        <div className="flex items-center gap-[3rem]">
          <Input label="Last Name" name={"lastName"} type={"text"} />
          <Input label="First Name" name={"firstName"} type={"text"} />
        </div>
        <div className="flex items-center gap-[3rem]">
          <Input label="Your Email Address" name={"email"} type={"email"} />
          <Input label="You Phone Number" name={"phoneNumber"} type={"text"} />
        </div>
        <div className="flex items-center gap-[3rem]">
          <Input label="Booking Date" name={"date"} type={"date"} focused />
          <Input
            label="Upload Your Sample"
            name={"imageSmaple"}
            type="file"
            focused
          />
        </div>
        <div className="flex items-center gap-[3rem]">
          <Input
            label="Number of tattoos at this appointment"
            name={"tattooNumber"}
            type={"text"}
          />
          <Input label="Your Message" name={"message"} type="text" />
        </div>
        <div className="flex items-center gap-[3rem]">
          <RadioInput title="Is this your first request?" />
          <RadioInput title="Have I ever tattooed you?" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
