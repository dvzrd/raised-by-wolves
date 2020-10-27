import React from 'react';

import { Hero, Loader, Section } from './components';
import { useTVMazeContext } from './contexts';

export const App = () => {
  const { show, episodes, images } = useTVMazeContext();
  const backgroundImages = images.filter(({ type }) => type === 'background');

  if (!show) return <Loader />;

  console.log(show, episodes, backgroundImages[0]);

  return (
    <div className="flex flex-col flex-no-wrap min-h-screen">
      <Hero
        heading={show.name}
        subheading="Androids are tasked with raising human children on a mysterious planet."
        bgImage={backgroundImages[0]}
      >
        <a
          className="inline-flex bg-orange-500 hover:bg-orange-600 text-white sm:text-lg font-medium py-4 px-6 rounded shadow"
          href="https://www.youtube.com/watch?v=YIAIiw8UAfA"
        >
          Watch the first episode for free
        </a>
      </Hero>
      <Section component="main" className="flex-1 z-20">
        <article className="text-lg" dangerouslySetInnerHTML={{ __html: show.summary }} />
        {episodes.length && episodes.map((episode) => (
          <div key={episode.id}>
            <img alt={episode.name} src={episode.image.medium} />
            <h2 className="text-xl">{episode.number}. {episode.name}</h2>
          </div>
        ))}
      </Section>
      <Section component="footer" className="z-10">
        <p className="text-sm">
          <a href={show.url}>{show.name}</a> is streaming on <a href={show.officialSite}>{show.webChannel.name}</a>.
        </p>
      </Section>
    </div>
  );
};
