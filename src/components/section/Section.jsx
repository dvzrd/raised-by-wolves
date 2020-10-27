import React from "react";
import classNames from "classnames";

import styles from "./Section.module.scss";

export const Section = ({
  children,
  className,
  component = "section",
  containerComponent = "figure",
  containerClassName,
  pattern = "space-apart-lg",
  ...rest
}) => {
  const SectionComponent = component;
  const ContainerComponent = containerComponent;

  if (!children) return null;

  return (
    <SectionComponent
      className={classNames(
        styles.section,
        {
          "p-0": pattern === "space-apart-0",
          "py-2 md:py-3 xl:py-4": pattern === "space-apart-sm",
          "py-4 md:py-6 xl:py-8": pattern === "space-apart-md",
          "py-8 md:py-10 xl:py-12": pattern === "space-apart-lg",
          "py-10 md:py-12 xl:py-14": pattern === "space-apart-xl",
        },
        className
      )}
      {...rest}
    >
      <ContainerComponent
        className={classNames(
          "container",
          { "p-0": pattern === "contained" },
          containerClassName
        )}
      >
        {children}
      </ContainerComponent>
    </SectionComponent>
  );
};
