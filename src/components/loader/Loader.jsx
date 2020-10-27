import React from "react";
import classNames from "classnames";

import styles from "./Loader.module.scss";

export const Loader = ({
  children,
  className,
  showText = true,
  text = "Loading",
  textClassName,
}) => (
  <div className={classNames(styles.loader, "p-4 md:p-6 xl:p-8", className)}>
    {showText && (
      <h1
        className={classNames(
          styles.text,
          "text-primary text-3xl md:text-5xl xl:text-7xl",
          textClassName
        )}
      >
        {text}
      </h1>
    )}
    {children}
  </div>
);
