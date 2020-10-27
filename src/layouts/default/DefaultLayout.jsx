import React from "react";

import { Hero, Loader, Section } from "../../components";
import { useTVMazeContext } from "../../contexts";

import styles from "./DefaultLayout.module.scss";
import { hero } from "../constants";

// TODO:
// - create a container to reuse loading pattern for layouts and pages (or other components that use data)

export const DefaultLayout = ({ children }) => {
  const { show, images } = useTVMazeContext();
  const backgroundImages = images.filter(({ type }) => type === "background");

  if (!show) return <Loader />;

  console.log(images);

  return (
    <div className={styles.layout}>
      <Hero
        actions={hero?.actions}
        heading={show.name}
        subheading={hero?.subheading}
        bgImage={backgroundImages[0]}
      />
      <main className={styles.main}>{children}</main>
      <Section
        component="footer"
        className={styles.footer}
        pattern="space-apart-sm"
      >
        <p className="text-secondary text-sm">
          <a href={show.url}>{show.name}</a> is available for streaming
          exclusively on <a href={show.officialSite}>{show.webChannel.name}</a>.
        </p>
      </Section>
    </div>
  );
};
