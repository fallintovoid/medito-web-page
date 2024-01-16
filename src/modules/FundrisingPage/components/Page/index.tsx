import React from "react";
import s from "./styles.module.scss";
import Block from "@/UI/Block";
import ProgressBar from "../ProgressBar";
import DonationItem from "../DonationItem";
import getFundrising from "../../utils/getFundrising";
import DonationForm from "../DonationForm";
import { IDonatedUser } from "@/types/donatedUser";

type Props = {
  id: string;
};

const FundrisingPage = async ({ id }: Props) => {
  const fundrising = await getFundrising(id);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/checkout/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 10,
      },
    }
  );

  const data = await res.json();
  const donatedUsers = data.sessionsList as IDonatedUser[];

  const currentAmount = donatedUsers.reduce(
    (accumulator, currValue) => accumulator + currValue.value,
    0
  );

  return (
    <main className={s.page}>
      <h1>{fundrising.title}</h1>
      <div className={s.page__grid}>
        <div className={s.page__grid__left}>
          <Block>
            <h3>About this Fundrising</h3>
            <p>{fundrising.description}</p>
          </Block>
        </div>

        <Block className={s.page__grid__right}>
          <ProgressBar
            goalAmount={fundrising.goalAmount}
            currentAmount={currentAmount}
          />
          <p>{donatedUsers.length} donations</p>
          <DonationForm fundrisingId={id} />
          <ul className={s.page__grid__right__list}>
            {donatedUsers.map((item, i) => {
              return (
                <DonationItem
                  goalAmount={fundrising.goalAmount}
                  donatorName={item.name}
                  value={item.value}
                  date={item.date}
                  key={i}
                />
              );
            })}
          </ul>
        </Block>
      </div>
    </main>
  );
};

export default FundrisingPage;
