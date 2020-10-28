import React from "react";
import classNames from "classnames";

import styles from "./Card.module.scss";

export const Card = ({
  children,
  className,
  pattern = "default",
  mod,
  ...rest
}) => (
  <div
    {...rest}
    className={classNames(
      styles.default,
      {
        "shadow rounded p-6 md:p-8 xl:p-10": pattern === "default",
        "border-t-2 md:border-l-2 md:border-t-0 font-hairline tracking-wider my-12 md:my-16 xl:my-20 pt-12 md:px-10 md:py-2 xl:px-12 xl:py-4 leading-10 text-lg md:text-xl xl:text-2xl":
          pattern === "quote",
      },
      styles[pattern],
      styles[mod],
      className
    )}
  >
    {children}
  </div>
);
