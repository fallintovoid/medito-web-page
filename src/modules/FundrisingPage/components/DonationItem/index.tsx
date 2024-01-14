import Block from "@/UI/Block";
import React from "react";
import { BiDonateHeart } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";

import s from "./styles.module.scss";

type Props = {
  donatorName: string;
  value: number;
  date: string;
};

const DonationItem = ({ donatorName, value, date }: Props) => {
  return (
    <li>
      <Block overrideClassname={s.item}>
        <BiDonateHeart size={25} />
        <div className={s.item__info}>
          <span className={s.item__info__name}>{donatorName}</span>
          <div className={s.item__info__value_date}>
            <span className={s.item__info__value}>{value}$</span>
            <FaCircle size={7} />
            <span>{date}</span>
          </div>
        </div>
      </Block>
    </li>
  );
};

export default DonationItem;
