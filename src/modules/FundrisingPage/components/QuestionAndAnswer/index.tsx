"use client";

import React, { PropsWithChildren, useState } from "react";
import cn from "classnames";
import { FaArrowDown } from "react-icons/fa";

import s from "./styles.module.scss";

type Props = {
  question: string;
};

const QuestionAndAnswer = ({
  children,
  question,
}: PropsWithChildren<Props>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={s.wrapper}>
      <div className={s.question} onClick={() => setIsOpen((prev) => !prev)}>
        <p>{question}</p>
        <FaArrowDown
          size={15}
          className={cn(s.question__arrow, {
            [s.question__arrow__open]: isOpen,
          })}
        />
      </div>
      {isOpen && <div className={s.answer}>{children}</div>}
    </div>
  );
};

export default QuestionAndAnswer;
