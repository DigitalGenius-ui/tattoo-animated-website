"use client";

import Header from "@/components/Header/Header";
import { usePathname } from "next/navigation";
import React from "react";

const ShowHeader = () => {
  const pathname = usePathname();
  return <>{pathname !== "/" && <Header />}</>;
};

export default ShowHeader;
