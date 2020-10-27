import React from 'react';
import classNames from 'classnames';

export const Section = ({
  children,
  className,
  component = 'section',
  containerComponent = 'figure',
  containerClassName
}) => {
  const SectionComponent = component;
  const ContainerComponent = containerComponent;
  
  return (
    <SectionComponent className={classNames('flex flex-column flex-no-wrap', className)}>
      <ContainerComponent className={classNames('container', containerClassName)}>
        {children}
      </ContainerComponent>
    </SectionComponent>
  );
};
