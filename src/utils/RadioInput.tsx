"use client";

import { contactInputType } from "@/components/Home/Contact/Contact";
import clsx from "clsx";
import React from "react";
import { FieldErrors, UseFormSetValue, UseFormWatch } from "react-hook-form";

type RadioInputProps = {
  watch: UseFormWatch<contactInputType>;
  setValue: UseFormSetValue<contactInputType>;
  name: keyof contactInputType;
  value: string;
  label?: boolean;
  errors: FieldErrors<contactInputType>;
};

const RadioInput = ({
  watch,
  setValue,
  name,
  value,
  label = true,
  errors,
}: RadioInputProps) => {
  const inputValue = watch(name) as string;
  const isSelected = inputValue === value;
  const isError = errors && errors[name]?.message;

  return (
    <div className="relative flex items-center gap-[2rem]">
      <div
        onClick={() => setValue(name, value, { shouldValidate: true })}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div
          className={clsx(
            "w-3 h-3 rounded-full border border-white relative overflow-hidden",
            isError && "!border-rose-500"
          )}
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
      <span className="!text-xs text-red-500 absolute -bottom-5 left-0">
        {isError ? String(errors[name]?.message) : null}
      </span>
    </div>
  );
};

export default RadioInput;
