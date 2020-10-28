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
          case "primary":
          default:
            return "bg-transparent text-primary hover:bg-primary hover:text-secondary border border-primary";
        }
      case "default":
      default:
        switch (color) {
          case "primary":
          default:
            return "bg-primary text-secondary hover:bg-orange-600";
        }
    }
  };

  const getSize = () => {
    switch (size) {
      case "sm":
        return "py-2 px-4 text-sm sm:text-base";
      case "lg":
        return "py-6 px-8 text-lg sm:text-xl";
      case "md":
      default:
        return "py-4 px-6 sm:text-lg";
    }
  };

  return (
    <Component
      {...rest}
      className={classNames(
        styles.button,
        "shadow rounded transition duration-150 ease-in-out",
        getColor(),
        getSize(),
        className
      )}
    >
      {children}
    </Component>
  );
};
