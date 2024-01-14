import React from "react";

import s from "./styles.module.scss";
import Block from "@/UI/Block";
import Link from "next/link";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <main className={s.homepage}>
      <h1>Find suitable fundrising goals</h1>
      <div className={s.homepage__grid}>
        <Link href={"/1"}>
          <Block className={s.homepage__grid__item}>
            <h3>Hello</h3>
            <p>Its a description</p>
          </Block>
        </Link>
        <Link href={"/2"}>
          <Block  className={s.homepage__grid__item}>
            <h3>Hello</h3>
            <p>Its a description</p>
          </Block>
        </Link>
        <Link href={"/3"}>
          <Block  className={s.homepage__grid__item}>
            <h3>Hello</h3>
            <p>Its a description</p>
          </Block>
        </Link>
        <Link href={"/4"}>
          <Block className={s.homepage__grid__item}>
            <h3>Hello</h3>
            <p>Its a description</p>
          </Block>
        </Link>
        <Link href={"/5"}>
          <Block  className={s.homepage__grid__item}>
            <h3>Hello</h3>
            <p>Its a description</p>
          </Block>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
