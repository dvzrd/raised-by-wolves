import React from "react";

import { DefaultLayout } from "../../layouts";
import { Loader, Section } from "../../components";
import { useTVMazeContext } from "../../contexts";

export const CharactersPage = () => {
  const { cast } = useTVMazeContext();

  if (!cast) return <Loader />;

  console.log("cast", cast);

  return (
    <DefaultLayout>
      <Section className="bg-gray-100">
        {cast.length &&
          cast.map(({ character }) => (
            <div className="py-4" key={character.id}>
              <img alt={character.name} src={character.image.medium} />
              <h2 className="text-xl">{character.name}</h2>
            </div>
          ))}
      </Section>
    </DefaultLayout>
  );
};
