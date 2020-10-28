import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Button } from "../button";
import { Section } from "../section";

import styles from "./Hero.module.scss";

export const Hero = ({
  actions,
  actionsClassName,
  bgImage = false,
  captionProps,
  children,
  className,
  heading,
  subheading,
  ...rest
}) => (
  <Section
    component="header"
    className={classNames(styles.hero, bgImage && styles.bgImage, className)}
    pattern="space-apart-xl"
    style={
      bgImage && {
        backgroundImage: `
          linear-gradient(0deg, rgba(5, 10, 8, 1) 0%,
          rgba(5, 10, 8, 0) 100%),
          url(${bgImage})
        `,
      }
    }
    {...rest}
  >
    {heading && (
      <figcaption
        className={classNames(styles.caption, captionProps?.className)}
      >
        <h1
          className={classNames(
            styles.heading,
            "tracking-widest text-4xl sm:text-5xl lg:text-6xl xl:text-7xl",
            captionProps?.headingClassName
          )}
        >
          {heading}
        </h1>
        {subheading && (
          <h2
            className={classNames(
              styles.subheading,
              "font-light tracking-wider text-lg sm:text-xl md:text-2xl",
              bgImage && "text-white",
              captionProps?.subheadingClassName
            )}
          >
            {subheading}
          </h2>
        )}
      </figcaption>
    )}
    {children}
    {actions?.length ? (
      <div className={classNames(styles.actions, actionsClassName)}>
        {actions.map((action) => (
          <Button
            key={action.label}
            className={action.className}
            component="a"
            href={action.href}
            pattern="outline"
          >
            {action.label}
          </Button>
        ))}
      </div>
    ) : (
      actions
    )}
  </Section>
);

// Notes on prop types and why I won't be using them throughout this app:
// - There's not much time to waste so I decided to focus the more visual and architectural aspects of the app.
// - I'd prefer to use TypeScript if I'm going to bother with prop types which don't work with compilers.
// - I also don't have a lot of time to write type heavy components so you have to sacrifice some things in order to work faster - this is partly why I love js so much, the flexibility makes prototyping faster.
// - Going into a front end project without designs means half the time will be spent on writing and rewriting styles. For this one, the idea sort of developed as the api developed.

// Here's an example of how I use prop types:
// - This component had a lot of patterns to show, but the only purpose this serves is to create a sort of api for the next developer (mainly for myself in the future if I have to come back to this code, taking a glance at this structure lets me get an idea of what I can do with this component) who looks at this code.
// - The order of the props follows the placement of the markup for each prop. Some people like to use alphabetical and that's ok too because it's easier to automate that with a lint script later. It all depends on how you configre lint which I sadly don't have time for either since my focus is more style based for this project.
// - Sometimes I like to export propTypes along with the component and reuse them if I decide to extend this component - this usually works best with lower level components, but can also be done with this component, for example a hero pattern for a background video with a form card.

export const heroPropTypes = {
  bgImage: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.bool,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  component: PropTypes.elementType,
  containerComponent: PropTypes.elementType,
  containerClassName: PropTypes.string,
  captionProps: PropTypes.shape({
    className: PropTypes.string,
  }),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  children: PropTypes.node,
  actions: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    PropTypes.elementType,
  ]),
  actionsClassName: PropTypes.string,
};

Hero.propTypes = heroPropTypes;
