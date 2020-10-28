import React from "react";
import { Link } from "react-router-dom";

import { Button, Loader, Section } from "../../components";
import { useTVMazeContext } from "../../contexts";

import styles from "./DefaultLayout.module.scss";

// TODO:
// - create a container to reuse loading pattern for layouts and pages (or other components that use data)

export const DefaultLayout = ({
  children,
  showHeader = true,
  showFooter = true,
}) => {
  const { show } = useTVMazeContext();

  if (!show) return <Loader />;

  return (
    <div className={styles.layout}>
      {showHeader && (
        <Section
          className={styles.header}
          component="header"
          containerClassName="flex content-center items-center justify-between"
          pattern="space-apart-sm"
        >
          <Link to="/">
            <h1 className="inline-flex font-bold uppercase tracking-widest text-lg text-secondary hover:text-primary transition-colors duration-150 ease-in-out">
              {show.name}
            </h1>
          </Link>
          <Button
            color="secondary"
            component="a"
            pattern="outline"
            size="sm"
            href="https://www.youtube.com/watch?v=YIAIiw8UAfA"
            rel="noreferrer"
            target="_blank"
          >
            Watch the free pilot
          </Button>
        </Section>
      )}
      <main className={styles.main}>{children}</main>
      {showFooter && (
        <Section
          component="footer"
          className={styles.footer}
          pattern="space-apart-sm"
        >
          <p className="text-gray-800 text-sm">
            <a
              className="underline hover:text-secondary transition-colors duration-150 ease-in-out"
              href={show.url}
              rel="noreferrer"
              target="_blank"
            >
              {show.name}
            </a>{" "}
            is streaming exclusively on{" "}
            <a
              className="underline hover:text-secondary transition-colors duration-150 ease-in-out"
              href={show.officialSite}
              rel="noreferrer"
              target="_blank"
            >
              {show.webChannel.name}
            </a>
            .
          </p>
        </Section>
      )}
    </div>
  );
};
