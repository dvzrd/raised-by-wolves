import React from "react";
import classNames from "classnames";

import { DefaultLayout } from "../../layouts";
import { Loader, Section } from "../../components";
import { useTVMazeContext } from "../../contexts";

import styles from "./EpisodesPage.module.scss";

export const EpisodesPage = () => {
  const { episodes } = useTVMazeContext();

  if (!episodes) return <Loader />;

  return (
    <DefaultLayout>
      <Section
        containerClassName="grid gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-24 my-8 md:my-16"
        containerComponent="ul"
        pattern="space-apart-xl"
      >
        {episodes.length &&
          episodes.map((episode) => (
            <li
              key={episode.id}
              className={classNames(
                styles.episode,
                "grid lg:grid-cols-8 gap-4 sm:gap-6 md:gap-8 xl:gap-10 items-center content-center"
              )}
            >
              <a
                className="block h-full lg:col-span-3"
                href={episode.url}
                rel="noreferrer"
                target="_blank"
              >
                <div
                  className={classNames(
                    styles.image,
                    "bg-no-repeat bg-center bg-cover w-full lg:h-full transition-shadow duration-150 ease-in-out"
                  )}
                  style={{
                    backgroundImage: `url(${episode.image.original})`,
                  }}
                />
              </a>
              <div className="lg:col-span-5 mb-2">
                <a
                  className={styles.title}
                  href={episode.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <h4 className="uppercase leading-tight text-2xl md:text-3xl xl:text-4xl transition-colors duration-150 ease-in-out">
                    {episode.name}
                    <small
                      className={classNames(
                        styles.meta,
                        "block xs:flex xs:justify-between border-t-2 border-gray-800 pt-2 mt-1 text-gray-600 text-xs md:text-sm transition-colors duration-150 ease-in-out"
                      )}
                    >
                      Season {episode.season}, Episode {episode.number}{" "}
                      <span className="block sm:inline sm:text-right">
                        {episode.airdate}
                      </span>
                    </small>
                  </h4>
                </a>
                <article
                  className="md:text-lg xl:text-xl text-left text-gray-800 mt-4"
                  dangerouslySetInnerHTML={{ __html: episode.summary }}
                />
              </div>
            </li>
          ))}
      </Section>
    </DefaultLayout>
  );
};
