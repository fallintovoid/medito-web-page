import React, { PropsWithChildren } from "react";
import cn from "classnames";

import s from "./styles.module.scss";

type Props = {
  className?: string;
  overrideClassname?: string;
};

const Block = ({
  children,
  overrideClassname,
  className,
}: PropsWithChildren<Props>) => {
  return (
    <div className={cn(`${overrideClassname || s.block}`, className)}>
      {children}
    </div>
  );
};

export default Block;
