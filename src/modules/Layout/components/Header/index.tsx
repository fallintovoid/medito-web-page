"use client";

import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";

import s from "./styles.module.scss";

type Props = {};

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <header className={s.header}>
      {pathname !== "/" && (
        <FaArrowLeft
          size={30}
          onClick={router.back}
          className={s.header__arrow_back}
        />
      )}
    </header>
  );
};

export default Header;
