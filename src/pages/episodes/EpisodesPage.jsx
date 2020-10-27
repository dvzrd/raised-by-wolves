import React from "react";

import { DefaultLayout } from "../../layouts";
import { Loader, Section } from "../../components";
import { useTVMazeContext } from "../../contexts";

export const EpisodesPage = () => {
  const { episodes } = useTVMazeContext();

  if (!episodes) return <Loader />;

  return (
    <DefaultLayout>
      <Section className="bg-gray-200">
        {episodes.length &&
          episodes.map((episode) => (
            <div className="py-4" key={episode.id}>
              <img alt={episode.name} src={episode.image.medium} />
              <h2 className="text-xl">
                {episode.number}. {episode.name}
              </h2>
            </div>
          ))}
      </Section>
    </DefaultLayout>
  );
};
