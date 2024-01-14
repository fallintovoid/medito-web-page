import React from "react";

import s from "./styles.module.scss";

type Props = {};

const ProgressBar = (props: Props) => {
  return (
    <div className={s.progressbar__wrapper}>
      <div className={s.progressbar__info}>
        <div>
          <span className={s.bold}>850$</span>/1000$
        </div>
        <div className={s.progressbar__info__right}>85%</div>
      </div>
      <div className={s.progressbar}>
        <div className={s.progressbar__inner} style={{ width: "85%" }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
