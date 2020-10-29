import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { Button, Loader, Modal, Section } from "../../components";
import { useTVMazeContext } from "../../contexts";

import styles from "./DefaultLayout.module.scss";

// TODO:
// - create a container to reuse loading pattern for layouts and pages (or other components that use data)

export const DefaultLayout = ({
  children,
  className,
  headerProps,
  showHeader = true,
  mainClassName,
  footerProps,
  showFooter = true,
  ...rest
}) => {
  const { show } = useTVMazeContext();
  const [isModalOpen, setModalOpen] = useState(false);

  if (!show) return <Loader />;

  return (
    <>
      <div {...rest} className={classNames(styles.layout, className)}>
        {showHeader && (
          <Section
            component="header"
            containerClassName="flex content-center items-center justify-between"
            pattern="space-apart-sm"
            {...headerProps}
            className={classNames(styles.header, headerProps?.className)}
          >
            <Link to="/">
              <h1 className="inline-flex font-bold uppercase tracking-widest text-lg md:text-xl xl:text-2xl text-secondary hover:text-primary transition-colors duration-150 ease-in-out">
                {show.name}
              </h1>
            </Link>
            <Button
              color="secondary"
              pattern="outline"
              size="sm"
              onClick={() => setModalOpen(true)}
            >
              Watch the free pilot
            </Button>
          </Section>
        )}
        <main className={classNames(styles.main, mainClassName)}>
          {children}
        </main>
        {showFooter && (
          <Section
            component="footer"
            pattern="space-apart-sm"
            {...footerProps}
            className={classNames(styles.footer, footerProps?.className)}
          >
            <p className="text-sm">
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
      <Modal
        closeModal={() => setModalOpen(false)}
        isOpen={isModalOpen}
        videoId="YIAIiw8UAfA"
      />
    </>
  );
};
