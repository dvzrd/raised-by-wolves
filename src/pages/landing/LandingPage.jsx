import React from "react";

import { DefaultLayout } from "../../layouts";
import { Hero, Loader, Section } from "../../components";
import { useTVMazeContext } from "../../contexts";

export const LandingPage = () => {
  const { show, crew, images } = useTVMazeContext();
  const backgroundImages = images.filter(({ type }) => type === "background");
  const creator = crew?.filter(({ type }) => type === "Creator")[0];
  const producer = crew?.filter(
    ({ person }) => person.name === "Ridley Scott"
  )[0];

  if (!images.length) return <Loader />;

  console.log("show", show, "crew", crew);

  return (
    <DefaultLayout showHeader={false}>
      <Hero
        actions={[
          {
            href: "https://www.youtube.com/watch?v=YIAIiw8UAfA",
            label: "Watch the first episode for free",
          },
        ]}
        heading={show.name}
        subheading="Following a devestating holy war on Earth, a pair of Androids escape to an alien planet and try to establish a human colony guided by their creator's knowledge of science."
        bgImage={backgroundImages[0]?.resolutions?.original?.url}
      />
      <Section className="bg-secondary" pattern="space-apart-xl">
        {producer && creator && (
          <h2 className="font-light tracking-wider my-6 md:my-8 xl:my-10 text-gray-100 text-lg md:text-xl xl:text-2xl">
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
            {show.genres[0].toLowerCase()} - streaming exclusively on{" "}
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
        <article
          className="font-hairline tracking-wider my-6 md:my-8 xl:my-10 leading-12 text-gray-100 text-lg md:text-xl xl:text-2xl"
          dangerouslySetInnerHTML={{ __html: show?.summary }}
        />
      </Section>
      <img alt="Marcus Drusus Hero" src="/images/hero-marcus-drusus.jpg" />
      <Section className="bg-primary">
        <h4 className="font-light tracking-wide">Watch the trailer</h4>
      </Section>
      <Section className="bg-gray-100">
        <h4 className="font-light tracking-wide">Meet the characters</h4>
      </Section>
      <Section>
        <h4 className="font-light tracking-wide">
          See list of available episodes
        </h4>
      </Section>
    </DefaultLayout>
  );
};
