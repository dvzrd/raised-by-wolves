import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { DefaultLayout } from "../../layouts";
import { Button, Card, Hero, Loader, Section } from "../../components";
import { useTVMazeContext } from "../../contexts";

import styles from "./LandingPage.module.scss";

// TODO:
// - break up each section into separate component modules that can be imported from `./components`.

export const LandingPage = () => {
  const { show, cast, crew, episodes, images } = useTVMazeContext();
  const backgroundImages = images.filter(({ type }) => type === "background");
  const creator = crew?.filter(({ type }) => type === "Creator")[0];
  const producer = crew?.filter(
    ({ person }) => person.name === "Ridley Scott"
  )[0];
  const featuredCharacters = /^(Mother|Father)$/;
  const characters = cast?.filter(({ character }) =>
    character.name.match(featuredCharacters)
  );
  const featuredEpisode = episodes?.slice(-1).pop();

  const layoutProps = {
    showHeader: false,
    showFooter: false,
  };

  if (!images.length) return <Loader />;

  console.log(show, featuredEpisode);

  return (
    <DefaultLayout {...layoutProps}>
      <Hero
        actions={[
          {
            href: "https://www.youtube.com/watch?v=YIAIiw8UAfA",
            label: "Watch the first episode here for free",
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
            , comes a riveting {show?.genres[1]?.toLowerCase()}{" "}
            {show?.genres[0]?.toLowerCase()} - streaming only on{" "}
            <a
              className="text-orange-400 hover:text-primary"
              href={show?.officialSite}
              rel="noreferrer"
              target="_blank"
            >
              {show?.webChannel?.name}
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
            backgroundImage: "url(/images/landing-page-cta.jpg)",
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

      {characters && (
        <Section
          className="bg-secondary"
          containerClassName="flex flex-col flex-no-wrap p-0"
          pattern="space-apart-xl"
        >
          <figcaption className="container mt-12 mb-4 md:mt-24 md:mb-8 xl:mt-40 xl:mb-16">
            <h4 className="font-medium uppercase tracking-wide text-center text-gray-100 text-2xl md:text-3xl xl:text-4xl">
              <small className="block text-gray-300">Introducing</small>
              Mother and Father
            </h4>
          </figcaption>
          <div className="grid sm:grid-cols-2">
            {characters.map(({ character, person }) => (
              <div
                key={character.id}
                className="bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${character.image.original})`,
                  minHeight: "75vh",
                }}
              >
                {/* <img alt={person.name} src={person.image.original} /> */}
              </div>
            ))}
          </div>
          <footer className="container flex justify-center my-4 mx-auto my-4 md:my-8 xl:my-16">
            <Button component={Link} pattern="outline" to="/cast">
              Meet the rest of the cast
            </Button>
          </footer>
        </Section>
      )}

      <Section
        className="bg-primary"
        component="footer"
        pattern="space-apart-sm"
      >
        <figcaption className="mb-4 xl:mb-6 mt-16 md:mt-24 xl:mt-32 font-semibold uppercase tracking-widest text-center sm:text-left">
          <h4 className="md:text-lg xl:text-xl text-gray-800">{show?.name}</h4>
          {featuredEpisode && (
            <h4 className="leading-tight text-3xl md:text-4xl xl:text-5xl">
              {featuredEpisode.name}
              <small className="block xs:flex xs:justify-between border-t-2 border-gray-800 pt-2 mt-1 text-gray-600 text-xs md:text-sm">
                Season {featuredEpisode.season}, Episode{" "}
                {featuredEpisode.number}{" "}
                <span className="block sm:inline sm:text-right">
                  {featuredEpisode.airdate}
                </span>
              </small>
            </h4>
          )}
        </figcaption>
        {featuredEpisode && (
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 xl:gap-10 items-center content-center">
            <div
              className="w-full h-64 sm:h-full bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url(${featuredEpisode.image.original})`,
              }}
            />
            <div className="text-center sm:text-left sm:my-1 lg:my-2">
              <article
                className="md:text-lg xl:text-xl text-left text-gray-800"
                dangerouslySetInnerHTML={{ __html: featuredEpisode.summary }}
              />
              <Button
                className="mt-4 md:mt-6"
                color="secondary"
                component={Link}
                pattern="outline"
                size="sm"
                to="/episodes"
              >
                See full list of episodes
              </Button>
            </div>
          </div>
        )}
        <p className="text-sm md:text-base xl:text-lg text-center sm:text-left mt-8 md:mt-10 xl:mt-12">
          Streaming exclusively on{" "}
          <a
            className="underline text-gray-800 hover:text-secondary"
            href={show?.officialSite}
            rel="noreferrer"
            target="_blank"
          >
            {show?.webChannel?.name}
          </a>
        </p>
      </Section>
    </DefaultLayout>
  );
};
