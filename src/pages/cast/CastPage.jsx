import React from "react";
import classNames from "classnames";

import { DefaultLayout } from "../../layouts";
import { Card, Loader, Section } from "../../components";
import { useTVMazeContext } from "../../contexts";

import styles from "./CastPage.module.scss";

export const CastPage = () => {
  const { cast } = useTVMazeContext();

  if (!cast) return <Loader />;

  return (
    <DefaultLayout>
      <Section
        containerClassName="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10"
        containerComponent="div"
      >
        {cast.length &&
          cast.map(({ character, person }) => (
            <Card key={character.id} className={styles.card} pattern="portrait">
              <img
                className="w-full"
                alt={character.name}
                src={character.image.original}
              />
              <a
                className={classNames(
                  styles.caption,
                  "p-6 text-gray-100 text-center hover:text-primary transition duration-150 ease-in-out"
                )}
                href={person.url}
                rel="noreferrer"
                target="_blank"
              >
                <h2 className="leading-tight uppercase tracking-widest text-xs md:text-sm xl:text-base">
                  {person.name}
                </h2>
                <h2 className="leading-snug uppercase tracking-widest text-orange-300 text-lg md:text-xl xl:text-2xl">
                  {character.name}
                </h2>
              </a>
            </Card>
          ))}
      </Section>
    </DefaultLayout>
  );
};
