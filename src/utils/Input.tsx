"use client";

import { contactInputType } from "@/components/Home/Contact/Contact";
import clsx from "clsx";
import React, { useState } from "react";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";

type InputPropsType = {
  label: string;
  name: keyof contactInputType;
  type: string;
  focused?: boolean;
  errors: FieldErrors<contactInputType>;
  register: UseFormRegister<contactInputType>;
  watch: UseFormWatch<contactInputType>;
};

const Input = ({
  label,
  name,
  focused,
  errors,
  register,
  watch,
  ...props
}: InputPropsType & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [small, setSmall] = useState(false);
  const isError = errors && errors[name]?.message;
  const input = watch(name);

  return (
    <div className="relative !mt-4 w-full">
      <label
        htmlFor={name}
        className={`absolute transition-all duration-500 pointer-events-none text-white/60 ${
          focused || small
            ? "!text-[0.7vw] !-top-2.5 4xl:!-top-5"
            : "!text-[1vw] !-top-0.5 4xl:!-top-3"
        }`}
      >
        {label}
      </label>
      <input
        id={name}
        onFocus={() => setSmall(true)}
        {...props}
        {...register(name)}
        onBlur={() => !input && setSmall(false)}
        className={clsx(
          `!w-full !p-1 border-b border-white/20 focus:border-white/70 
        outline-none text-sm transition-all duration-500`,
          isError && "!border-red-500"
        )}
      />
      <span className="!text-xs text-red-500 absolute -bottom-5 left-0">
        {isError ? String(errors[name]?.message) : null}
      </span>
    </div>
  );
};

export default Input;
