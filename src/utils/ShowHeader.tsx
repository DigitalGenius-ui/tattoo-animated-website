"use client";

import { usePathname } from "next/navigation";
import React from "react";

const ShowHeader = ({ children }: { children: React.ReactElement }) => {
  const pathname = usePathname();
  return <>{pathname !== "/" && children}</>;
};

export default ShowHeader;
