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
      <Section>
        <figcaption className="mt-8 mb-4">
          <h3 className="text-2xl md:text-3xl xl:text-4xl">
            From the minds of
          </h3>
        </figcaption>
        <ul className="grid sm:grid-cols-2">
          <li className="my-4">
            <h3 className="text-xl md:text-2xl xl:text-3xl">Ridley Scott</h3>
          </li>
          <li className="my-4">
            <h3 className="text-xl md:text-2xl xl:text-3xl">
              Aaron Guzikowski
            </h3>
          </li>
        </ul>
        <article
          className="py-8 md:py-10 xl:py-12 leading-12 text-lg md:text-xl xl:text-2xl"
          dangerouslySetInnerHTML={{ __html: show?.summary }}
        />
      </Section>
    </DefaultLayout>
  );
};
