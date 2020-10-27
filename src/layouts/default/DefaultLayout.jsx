import React from "react";

import { Hero, Loader, Section } from "../../components";
import { useTVMazeContext } from "../../contexts";

import { hero } from "../constants";

// TODO:
// - move main sections to `pages/lading`
// - wrap landing page with `DefaultLayout`
// - create page to list episodes:
// {episodes.length && episodes.map((episode) => (
//   <div className="py-4" key={episode.id}>
//     <img alt={episode.name} src={episode.image.medium} />
//     <h2 className="text-xl">
//       {episode.number}. {episode.name}
//     </h2>
//   </div>
// ))}

export const DefaultLayout = ({ children }) => {
  const { show, images } = useTVMazeContext();
  const backgroundImages = images.filter(({ type }) => type === "background");

  if (!show) return <Loader />;

  console.log(show, backgroundImages[0]);

  return (
    <div className="flex flex-col flex-no-wrap min-h-screen">
      <Hero
        actions={hero?.actions}
        heading={show.name}
        subheading={hero?.subheading}
        bgImage={backgroundImages[0]}
      />
      <main className="flex-1 z-20">
        <Section>
          <article
            className="py-8 md:py-10 xl:py-12 text-lg md:text-xl xl:text-2xl"
            dangerouslySetInnerHTML={{ __html: show.summary }}
          />
        </Section>
        {children}
      </main>
      <Section component="footer" className="z-10">
        <p className="text-sm">
          <a href={show.url}>{show.name}</a> is available for streaming
          exclusively on <a href={show.officialSite}>{show.webChannel.name}</a>.
        </p>
      </Section>
    </div>
  );
};