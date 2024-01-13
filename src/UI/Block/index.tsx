import React, { PropsWithChildren } from "react";
import cn from "classnames";

import s from "./styles.module.scss";

type Props = {
  backgroundColor: string;
  className?: string;
  overrideClassname?: string;
};

const Block = ({
  children,
  overrideClassname,
  className,
  backgroundColor,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={cn(`${overrideClassname || s.block}`, className)}
      style={{ backgroundColor }}
    >
      {children}
    </div>
  );
};

export default Block;
