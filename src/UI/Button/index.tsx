import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import s from "./styles.module.scss";

const Button = ({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button className={s.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
