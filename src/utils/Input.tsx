"use client";

import { contactInputType } from "@/components/Contact/Contact";
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
          focused || small ? "!text-[8px] !-top-2.5" : "!text-[13px] !-top-0.5"
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
      <span className="!text-xs text-red-500">
        {isError ? String(errors[name]?.message) : null}
      </span>
    </div>
  );
};

export default Input;
