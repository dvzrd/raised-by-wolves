import React from "react";

import { DefaultLayout } from "../../layouts";
import { Loader, Section } from "../../components";
import { useTVMazeContext } from "../../contexts";

export const LandingPage = () => {
  const { show, crew } = useTVMazeContext();

  if (!show) return <Loader />;

  const producer = crew?.filter(
    ({ person }) => person.name === "Ridley Scott"
  )[0];
  const creator = crew?.filter(({ type }) => type === "Creator")[0];

  console.log("show", show, "crew", crew);

  return (
    <DefaultLayout>
      <Section className="bg-secondary">
        {producer && creator && (
          <h2 className="font-light tracking-wider mt-4 md:mt-6 xl:mt-8 text-gray-100 text-lg md:text-xl xl:text-2xl">
            From {producer.type} {producer.person.name}, comes an exciting new
            series straight from the mind of {creator.person.name}.
          </h2>
        )}
        <article
          className="font-hairline tracking-wider py-8 md:py-10 xl:py-12 leading-12 text-gray-100 text-lg md:text-xl xl:text-2xl"
          dangerouslySetInnerHTML={{ __html: show?.summary }}
        />
      </Section>
      <Section className="bg-primary">
        <h2 className="font-light tracking-wide mb-4 md:mb-6 xl:mb-8 text-secondary text-lg md:text-xl xl:text-2xl">
          {show.name} is streaming exclusively on{" "}
          <a href={show.officialSite}>{show.webChannel.name}</a>
        </h2>
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
