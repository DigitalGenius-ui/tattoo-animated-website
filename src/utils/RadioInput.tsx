"use client";

import clsx from "clsx";
import React, { useState } from "react";

const RadioInput = ({ title }: { title: string }) => {
  const [value, setValue] = useState(0);
  return (
    <div className="!space-y-2 text-white/80 w-full">
      <p className="text-[10px]">{title}</p>
      <div className="flex items-center gap-[2rem]">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setValue(1)}
        >
          <div
            className={clsx(
              `w-3 h-3 rounded-full border border-white `,
              value === 1 && "bg-white"
            )}
          />
          <p className="text-[10px]">Yes</p>
        </div>
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setValue(2)}
        >
          <div
            className={clsx(
              `w-3 h-3 rounded-full border border-white `,
              value === 2 && "bg-white"
            )}
          />
          <p className="text-[10px]">No</p>
        </div>
      </div>
    </div>
  );
};

export default RadioInput;
