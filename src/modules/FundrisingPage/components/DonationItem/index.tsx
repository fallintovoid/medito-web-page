import Block from "@/UI/Block";
import React from "react";
import { BiDonateHeart } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";
import cn from "classnames";

import s from "./styles.module.scss";
import getTimeAgo from "../../utils/getTimeAgo";

type Props = {
  donatorName: string;
  value: number;
  date: string;
  goalAmount: number;
};

const DonationItem = ({ donatorName, value, date, goalAmount }: Props) => {
  // For people who has donated more than 5% of overall Goal amount gets Tier 3
  // For people who has donated more than 10% of overall Goal amount gets Tier 2
  // For people who has donated more than 20% of overall Goal amount gets Tier 1
  
  const percentage = (value / goalAmount) * 100;
  const timeAgoString = getTimeAgo(date);

  const tier =
    percentage >= 20
      ? "1"
      : percentage >= 10 && percentage <= 19
      ? "2"
      : percentage >= 5 && percentage <= 9
      ? "3"
      : null;

  return (
    <li>
      <Block
        overrideClassname={s.item}
        className={cn({
          [s.item__tier1]: percentage >= 20,
          [s.item__tier2]: percentage >= 10 && percentage <= 19,
          [s.item__tier3]: percentage >= 5 && percentage <= 9,
        })}
      >
        {tier && (
          <div
            className={cn(s.badge, {
              [s.badge__tier1]: percentage >= 20,
              [s.badge__tier2]: percentage >= 10 && percentage <= 19,
              [s.badge__tier3]: percentage >= 5 && percentage <= 9,
            })}
          >
            Tier {tier} Donator
          </div>
        )}

        <BiDonateHeart size={25} />
        <div className={s.item__info}>
          <span className={s.item__info__name}>{donatorName}</span>
          <div className={s.item__info__value_date}>
            <span className={s.item__info__value}>{value}$</span>
            <FaCircle size={7} />
            <span className={s.item__info__date}>{timeAgoString}</span>
          </div>
        </div>
      </Block>
    </li>
  );
};

export default DonationItem;
