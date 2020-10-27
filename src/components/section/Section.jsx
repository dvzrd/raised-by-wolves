import React from 'react';
import classNames from 'classnames';

import styles from "./Section.module.scss";

export const Section = ({
  children,
  className,
  component = 'section',
  containerComponent = 'figure',
  containerClassName,
  ...rest
}) => {
  const SectionComponent = component;
  const ContainerComponent = containerComponent;

  if (!children) return null;

  return (
    <SectionComponent className={classNames(styles.section, 'py-4 md:py-6 xl:py-8', className)} {...rest}>
      <ContainerComponent className={classNames('container', containerClassName)}>
        {children}
      </ContainerComponent>
    </SectionComponent>
  );
};
