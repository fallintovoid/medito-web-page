"use client";

import React from "react";

import s from "./styles.module.scss";
import { usePathname } from "next/navigation";

const NotificationBar = () => {
  const pathname = usePathname();

  if (pathname === "/success") {
    return null;
  }
  return (
    <div className={s.bar}>
      Illia has donated 14$ for Lorem ipsum fundrising!
    </div>
  );
};

export default NotificationBar;
