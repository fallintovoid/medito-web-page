"use client";

import React, { useEffect, useState } from "react";
import cn from "classnames";

import s from "./styles.module.scss";

type Props = {
  goalAmount: number;
  currentAmount: number;
};

const ProgressBar = ({ goalAmount, currentAmount }: Props) => {
  const [width, setWidth] = useState(0);

  const percentage = ((currentAmount / goalAmount) * 100).toFixed(1);
  const styledPercentage = `${Number(width) > 100 ? 100 : width}%`;

  useEffect(() => {
    setWidth(Number(percentage));
  }, []);

  return (
    <div className={s.progressbar__wrapper}>
      <div className={s.progressbar__info}>
        <div>
          <span className={s.bold}>{currentAmount}$</span>/{goalAmount}$
        </div>
        <div className={s.progressbar__info__right}>{percentage}%</div>
      </div>
      <div className={s.progressbar}>
        <div
          className={s.progressbar__inner}
          style={{ width: styledPercentage }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
