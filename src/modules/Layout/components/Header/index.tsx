"use client";

import React from "react";
import { FaHome } from "react-icons/fa";

import s from "./styles.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const Header = () => {
  const pathname = usePathname();

  if (pathname === "/success") {
    return null;
  }

  return (
    <header className={s.header}>
      <Link href={"/"}>
        <FaHome size={30} className={s.header__home} />
      </Link>
    </header>
  );
};

export default Header;
