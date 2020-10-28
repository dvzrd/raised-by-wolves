import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { DefaultLayout } from "../../layouts";
import { Button, Card, Hero, Loader, Section } from "../../components";
import { useTVMazeContext } from "../../contexts";

import styles from "./LandingPage.module.scss";

export const LandingPage = () => {
  const { show, crew, images } = useTVMazeContext();
  const backgroundImages = images.filter(({ type }) => type === "background");
  const creator = crew?.filter(({ type }) => type === "Creator")[0];
  const producer = crew?.filter(
    ({ person }) => person.name === "Ridley Scott"
  )[0];

  if (!images.length) return <Loader />;

  return (
    <DefaultLayout showHeader={false}>
      <Hero
        actions={[
          {
            href: "https://www.youtube.com/watch?v=YIAIiw8UAfA",
            label: "Watch the first episode for free here",
            rel: "noreferrer",
            target: "_blank",
          },
        ]}
        heading={show?.name}
        subheading="Following a devestating holy war on Earth, a pair of Androids escape to an alien planet and try to establish a human colony guided by their creator's knowledge of science."
        bgImage={backgroundImages[0]?.resolutions?.original?.url}
      />
      <Section className="bg-secondary" pattern="space-apart-xl">
        {producer && creator && (
          <h2 className="font-light tracking-wider my-12 md:my-16 xl:my-20 text-gray-100 text-lg md:text-xl xl:text-2xl">
            From {producer.type.toLowerCase()}{" "}
            <a
              className="text-orange-400 hover:text-primary"
              href="https://www.imdb.com/name/nm0000631/"
              rel="noreferrer"
              target="_blank"
            >
              {producer.person.name}
            </a>{" "}
            and {creator.type.toLowerCase()}{" "}
            <a
              className="text-orange-400 hover:text-primary"
              href="https://www.imdb.com/name/nm3360706/"
              rel="noreferrer"
              target="_blank"
            >
              {creator.person.name}
            </a>
            , comes a riveting {show.genres[1].toLowerCase()}{" "}
            {show.genres[0].toLowerCase()} - streaming only on{" "}
            <a
              className="text-orange-400 hover:text-primary"
              href={show.officialSite}
              rel="noreferrer"
              target="_blank"
            >
              {show.webChannel.name}
            </a>
            .
          </h2>
        )}
        <Card
          className="border-primary text-orange-200"
          pattern="quote"
          dangerouslySetInnerHTML={{ __html: show?.summary }}
        />
      </Section>
      <Section
        containerClassName="grid xl:grid-cols-3 max-w-full p-0"
        pattern="space-apart-0"
      >
        <div
          className={classNames(
            styles.ctaImage,
            "bg-bottom bg-cover bg-no-repeat xl:col-span-2"
          )}
          style={{
            backgroundImage: "url(/images/hero-marcus-drusus.jpg)",
          }}
        />
        <figcaption className="relative bg-primary px-6 md:px-8 text-secondary">
          <Card
            className={classNames(
              styles.ctaCard,
              "bg-white -mt-8 mb-8 sm:-mt-20 sm:mb-20 md:-mt-32 md:mb-24 xl:my-0"
            )}
          >
            <h4 className="uppercase font-bold mb-3 text-secondary text-xl md:text-2xl xl:text-3xl">
              {show?.name}
            </h4>
            <h4 className="text-sm md:text-base">
              Created by:{" "}
              <a
                className="text-orange-400 hover:text-primary"
                href="https://www.imdb.com/name/nm3360706/"
                rel="noreferrer"
                target="_blank"
              >
                {creator?.person?.name}
              </a>
            </h4>
            <h4 className="text-sm md:text-base">
              Streaming on:{" "}
              <a
                className="text-orange-400 hover:text-primary"
                href={show?.officialSite}
                rel="noreferrer"
                target="_blank"
              >
                {show?.webChannel?.name}
              </a>
            </h4>
            <h4 className="text-sm md:text-base">
              Genres: {show?.genres?.join(", ")}
            </h4>
            <h4 className="text-sm md:text-base">
              Premiered on: {show?.premiered}
            </h4>
            <h4 className="text-sm md:text-base">
              Average Rating: {show?.rating?.average} / 10
            </h4>
            <Button
              className="flex justify-center mt-6"
              color="secondary"
              component="a"
              pattern="outline"
              size="sm"
              href="https://www.youtube.com/watch?v=mRMVtm2voVA"
              rel="noreferrer"
              target="_blank"
            >
              Watch the trailer
            </Button>
            <Button
              className="flex justify-center mt-4"
              color="secondary"
              component="a"
              size="sm"
              href="https://www.youtube.com/watch?v=YIAIiw8UAfA"
              rel="noreferrer"
              target="_blank"
            >
              Watch the free pilot
            </Button>
          </Card>
        </figcaption>
      </Section>
      <Section>
        <h4 className="font-medium tracking-wide text-xl md:text-2xl xl:text-3xl my-4">
          Meet the main characters
        </h4>
        <Button size="sm" component={Link} to="/characters">
          See all characters
        </Button>
      </Section>
      <Section className="bg-gray-200">
        <h4 className="font-medium tracking-wide text-xl md:text-2xl xl:text-3xl my-4">
          Most recent episodes
        </h4>
        <Button color="secondary" size="sm" component={Link} to="/episodes">
          See all episodes
        </Button>
      </Section>
    </DefaultLayout>
  );
};
