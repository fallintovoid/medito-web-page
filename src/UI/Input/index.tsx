import React, { InputHTMLAttributes } from "react";

import s from "./styles.module.scss";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={s.input} {...props} />;
};

export default Input;
