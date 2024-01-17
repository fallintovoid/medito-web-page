"use client";

import React from "react";
import { motion } from "framer-motion";

import s from "./styles.module.scss";

type Props = {
  goalAmount: number;
  currentAmount: number;
};

const ProgressBar = ({ goalAmount, currentAmount }: Props) => {
  const percentage = ((currentAmount / goalAmount) * 100).toFixed(1);
  const styledPercentage = `${
    Number(percentage) > 100 ? 100 : Number(percentage)
  }%`;

  return (
    <div className={s.progressbar__wrapper}>
      <div className={s.progressbar__info}>
        <div>
          <span className={s.bold}>{currentAmount}$</span>/{goalAmount}$
        </div>
        <div className={s.progressbar__info__right}>{percentage}%</div>
      </div>
      <div className={s.progressbar}>
        <motion.div
          className={s.progressbar__inner}
          animate={{
            width: styledPercentage,
          }}
          transition={{
            duration: 2,
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;
