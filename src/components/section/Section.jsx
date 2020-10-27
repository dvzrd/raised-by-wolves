import React from 'react';
import classNames from 'classnames';

export const Section = ({ children, className, containerClassName }) => (
  <section className={classNames('flex flex-column flex-no-wrap', className)}>
    <figure className={classNames('container', containerClassName)}>
      {children}
    </figure>
  </section>
);
