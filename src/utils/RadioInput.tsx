"use client";

import { contactInputType } from "@/components/Contact/Contact";
import clsx from "clsx";
import React from "react";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";

type RadioInputProps = {
  watch: UseFormWatch<contactInputType>;
  setValue: UseFormSetValue<contactInputType>;
  name: keyof contactInputType;
  value: string;
  label?: boolean;
};

const RadioInput = ({
  watch,
  setValue,
  name,
  value,
  label = true,
}: RadioInputProps) => {
  const inputValue = watch(name) as string;
  const isSelected = inputValue === value;
  return (
    <div className="flex items-center gap-[2rem]">
      <div
        onClick={() => setValue(name, value, { shouldValidate: true })}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div
          className={
            "w-3 h-3 rounded-full border border-white relative overflow-hidden"
          }
        >
          <span
            className={clsx(
              `absolute inset-0 bg-white rounded-full scale-0 transition-all duration-500`,
              isSelected && "scale-100 transition-all duration-500"
            )}
          />
        </div>
        <p className="!text-[13px] capitalize">{label ? value : ""}</p>
      </div>
    </div>
  );
};

export default RadioInput;
