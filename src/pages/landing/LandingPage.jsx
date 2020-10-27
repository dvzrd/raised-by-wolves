import React from "react";

import { DefaultLayout } from "../../layouts";
import { Loader, Section } from "../../components";
import { useTVMazeContext } from "../../contexts";

export const LandingPage = () => {
  const { show } = useTVMazeContext();

  if (!show) return <Loader />;

  console.log(show);

  return (
    <DefaultLayout>
      <Section className="bg-secondary">
        <h3 className="mt-4 md:mt-6 xl:md-8 text-gray-300 text-xl md:text-2xl xl:text-3xl">
          From Executive Producer Ridley Scott and Creator Aaron Guzikowski
          comes a brand new Science Fiction Drama.
        </h3>
        <article
          className="py-8 md:py-10 xl:py-12 leading-12 text-gray-300 text-lg md:text-xl xl:text-2xl"
          dangerouslySetInnerHTML={{ __html: show?.summary }}
        />
      </Section>
    </DefaultLayout>
  );
};
