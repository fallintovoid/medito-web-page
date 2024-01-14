import React from "react";
import { FaHeart } from "react-icons/fa";

import s from "./styles.module.scss";

const Page = () => {
  return (
    <main className={s.loading}>
      <FaHeart size={90} className={s.icon} />
    </main>
  );
};

export default Page;
