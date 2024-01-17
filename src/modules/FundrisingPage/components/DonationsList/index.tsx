"use client";

import { IDonatedUser } from "@/types/donatedUser";
import React, { useState } from "react";
import DonationItem from "../DonationItem";

import s from "./styles.module.scss";
import Button from "@/UI/Button";

type Props = {
  donatedUsers: IDonatedUser[];
  goalAmount: number;
};

const DonationsList = ({ donatedUsers, goalAmount }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <ul className={s.list}>
        {donatedUsers
          .map((item, i) => {
            return (
              <DonationItem
                goalAmount={goalAmount}
                donatorName={item.name}
                value={item.value}
                date={item.date}
                key={i}
              />
            );
          })
          .slice(0, isExpanded ? donatedUsers.length - 1 : 5)}
      </ul>
      {donatedUsers.length > 6 && (
        <Button onClick={() => setIsExpanded((prev) => !prev)}>
          Show {isExpanded ? "less" : "more"}
        </Button>
      )}
    </>
  );
};

export default DonationsList;
