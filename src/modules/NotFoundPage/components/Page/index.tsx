import React from "react";

import s from "./styles.module.scss";
import Button from "@/UI/Button";
import Link from "next/link";

const Page = () => {
  return (
    <main className={s.page}>
      <h1>Page not found </h1>
      <Link href={"/"}>
        <Button>Go to the homepage</Button>
      </Link>
    </main>
  );
};

export default Page;
