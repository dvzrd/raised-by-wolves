import React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

export const Button = ({
  children,
  className,
  component = "button",
  color = "primary",
  pattern = "default",
  size = "md",
  ...rest
}) => {
  const Component = component;

  const getColor = () => {
    switch (pattern) {
      case "outline":
        switch (color) {
          case "secondary":
            return "bg-transparent text-secondary hover:bg-secondary hover:text-primary border border-secondary";
          case "primary":
          default:
            return "bg-transparent text-primary hover:bg-primary hover:text-secondary border border-primary";
        }
      case "default":
      default:
        switch (color) {
          case "secondary":
            return "bg-secondary text-primary hover:bg-primary hover:text-secondary";
          case "primary":
          default:
            return "bg-primary text-secondary hover:bg-orange-600 hover:text-white";
        }
    }
  };

  const getSize = () => {
    switch (size) {
      case "sm":
        return "py-2 px-4 xl:py-4 xl:px-6 text-xs md:text-sm";
      case "lg":
        return "py-6 px-8 xl:py-8 xl:px-10 text-lg md:text-xl";
      case "md":
      default:
        return "py-4 px-6 xl:py-6 xl:px-8 md:text-lg";
    }
  };

  return (
    <Component
      {...rest}
      className={classNames(
        styles.button,
        "shadow rounded transition-colors duration-150 ease-in-out",
        getColor(),
        getSize(),
        className
      )}
    >
      {children}
    </Component>
  );
};
