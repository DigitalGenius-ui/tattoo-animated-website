import React from "react";

type SidePropsTYpe = {
  children: React.ReactNode;
  className: string;
  ref: React.RefObject<HTMLDivElement | null>;
};

const Side = ({ children, className, ref }: SidePropsTYpe) => {
  return (
    <div
      ref={ref}
      style={{ transform: "translateX(100%)" }}
      className={`fixed inset-0 bg-neutral-700 ${className}`}
    >
      {children}
    </div>
  );
};

export default Side;
