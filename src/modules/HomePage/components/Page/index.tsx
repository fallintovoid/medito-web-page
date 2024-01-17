import React, { use } from "react";
import Block from "@/UI/Block";
import Link from "next/link";

import s from "./styles.module.scss";
import getFundrisings from "../../utils/getFundrisings";

const HomePage = async () => {
  const fundrisings = await getFundrisings();

  return (
    <main className={s.homepage}>
      <h1>Find suitable fundrising goals</h1>
      <div className={s.homepage__grid}>
        {fundrisings.map((item) => {
          return (
            <Link href={`/${item.id}`} key={item.id}>
              <Block className={s.homepage__grid__item}>
                <h3>{item.title}</h3>
                <p>{item.description.slice(0, 30)}...</p>
              </Block>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default HomePage;
