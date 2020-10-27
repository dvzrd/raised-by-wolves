import React from 'react';
import classNames from 'classnames';

import { Section } from '../section';

import styles from './Hero.module.scss';

export const Hero = ({
  bgImage,
  captionProps,
  children,
  className,
  heading,
  subheading,
}) => (
  <Section
    component="header"
    className={classNames(
      styles.hero,
      'py-6 md:py-8 xl:py-10',
      bgImage && styles.bgImage,
      className,
    )}
    style={bgImage?.resolutions?.original?.url && {
      backgroundImage: `url(${bgImage?.resolutions?.original?.url})`,
    }}
  >
    {heading && (
      <figcaption className={classNames(styles.caption, captionProps?.className)}>
        <h1
          className={classNames(
            "text-4xl sm:text-5xl md:text-6xl",
            bgImage && "text-white",
            captionProps?.headingClassName,
          )}
        >
          {heading}
        </h1>
        {subheading && (
          <h2
            className={classNames(
              "text-lg sm:text-xl md:text-2xl",
              bgImage && "text-gray-200",
              captionProps?.subheadingClassName
            )}
          >
            {subheading}
          </h2>
        )}
      </figcaption>
    )}
    {children}
  </Section>
);
