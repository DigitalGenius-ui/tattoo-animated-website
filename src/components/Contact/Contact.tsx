"use client";

import React from "react";
import Input from "../../utils/Input";
import RadioInput from "@/utils/RadioInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { conactFormSchema } from "@/schemas/ContactSchema";
import { z } from "zod";
import AnimatedButton from "./AnimatedButton";

export type contactInputType = z.input<typeof conactFormSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<contactInputType>({
    resolver: zodResolver(conactFormSchema),
  });

  const onSubmit = (data: contactInputType) => console.log(data);

  return (
    <section className="flex !h-screen !w-[90%] !mx-auto !my-[8rem] !text-white">
      <div className="flex-1">
        <h1>Con</h1>
        <h1>tact</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex-1 !space-y-9">
        <div className="flex items-center gap-[3rem]">
          <Input
            errors={errors}
            label="Last Name"
            name={"lastName"}
            type={"text"}
            register={register}
            watch={watch}
          />
          <Input
            errors={errors}
            label="First Name"
            name={"firstName"}
            type={"text"}
            register={register}
            watch={watch}
          />
        </div>
        <div className="flex items-center gap-[3rem]">
          <Input
            errors={errors}
            label="Your Email Address"
            name={"email"}
            type={"email"}
            register={register}
            watch={watch}
          />
          <Input
            errors={errors}
            label="You Phone Number"
            name={"phoneNumber"}
            type={"text"}
            register={register}
            watch={watch}
          />
        </div>
        <div className="flex items-center gap-[3rem]">
          <Input
            errors={errors}
            label="Booking Date"
            name={"bookingDate"}
            type={"date"}
            register={register}
            watch={watch}
            focused
          />
          <Input
            errors={errors}
            label="Upload Your Sample"
            name={"imageSmaple"}
            type="file"
            register={register}
            watch={watch}
            focused
          />
        </div>
        <div className="flex items-center gap-[3rem]">
          <Input
            errors={errors}
            label="Number of tattoos at this appointment"
            name={"tattooNumber"}
            type={"text"}
            register={register}
            watch={watch}
          />
          <Input
            errors={errors}
            label="Your Message"
            name={"message"}
            type="text"
            register={register}
            watch={watch}
          />
        </div>
        <div className="flex items-center gap-[3rem] text-white/60">
          <div className="flex-1 !space-y-3">
            <p className="!text-[13px]">Is this your first request?</p>
            <div className="flex items-center gap-[4rem]">
              <RadioInput
                name={"firstTattoo"}
                value="yes"
                watch={watch}
                setValue={setValue}
              />
              <RadioInput
                name={"firstTattoo"}
                value="no"
                watch={watch}
                setValue={setValue}
              />
            </div>
          </div>
          <div className="flex-1 !space-y-3">
            <p className="!text-[13px]">Have I ever tattooed you?</p>
            <div className="flex items-center gap-[4rem]">
              <RadioInput
                watch={watch}
                setValue={setValue}
                name={"everTattooed"}
                value="yes"
              />
              <RadioInput
                watch={watch}
                setValue={setValue}
                name={"everTattooed"}
                value="no"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-white/60">
          <RadioInput
            watch={watch}
            setValue={setValue}
            name={"confirmTerms"}
            value="yes"
            label={false}
          />
          <p className="text-[13px]">
            I have read and accepted the privacy policy.*
          </p>
        </div>
        <AnimatedButton btnName="Send Message" />
      </form>
    </section>
  );
};

export default Contact;
