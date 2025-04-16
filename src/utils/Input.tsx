"use client";

import React, { useState } from "react";

type InputPropsType = {
  label: string;
  name: string;
  type: string;
  focused?: boolean;
};

const Input = ({
  label,
  name,
  focused,
  ...props
}: InputPropsType & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [small, setSmall] = useState(false);
  const [input, setInput] = useState("");

  return (
    <div className="relative !mt-4 w-full">
      <label
        htmlFor={name}
        className={`absolute top-1 text-[8px] transition-all duration-500 pointer-events-none text-white/60 ${
          focused || small ? "!text-[8px] !-top-2" : "text-[10px]"
        }`}
      >
        {label}
      </label>
      <input
        id={name}
        onFocus={() => setSmall(true)}
        onBlur={() => !input && setSmall(false)}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        {...props}
        className="!w-full !p-1 border-b border-white/20 focus:border-white/70 
        outline-none text-xs transition-all duration-500"
      />
    </div>
  );
};

export default Input;
