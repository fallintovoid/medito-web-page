import React from "react";

import s from "./styles.module.scss";

type Props = {};

const ProgressBar = (props: Props) => {
  return (
    <div className={s.progressbar__wrapper}>
      <div className={s.progressbar__info}>
        <div>
          <h3>1000/1000</h3>
        </div>
        <div>
          <h3>85%</h3>
        </div>
      </div>
      <div className={s.progressbar}>
        <div className={s.progressbar__inner} style={{ width: "85%" }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
