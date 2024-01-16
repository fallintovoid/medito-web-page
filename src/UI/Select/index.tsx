import React, { SelectHTMLAttributes } from "react";

import s from "./styles.module.scss";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  options: {
    value: string;
    label: string;
  }[];
}

const Select = ({ options, ...props }: Props) => {
  return (
    <select {...props} className={s.select}>
      {options.map((item, i) => {
        return (
          <option value={item.value} key={i}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
