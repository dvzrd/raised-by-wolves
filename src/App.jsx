import React from 'react';

import { Loader, Section } from './components';
import { useTVShowContext } from './contexts';

export const App = () => {
  const { show, episodes } = useTVShowContext();

  if (!show) return <Loader />;

  console.log(show, episodes);

  return (
    <div className="flex flex-col flex-no-wrap min-h-screen">
      <Section component="header" className="z-30">
        <img alt={show.name} src={show.image.original} />
        <h1 className="text-2xl">{show.name}</h1>
      </Section>
      <Section component="main" className="flex-1 z-20">
        <article className="text-lg" dangerouslySetInnerHTML={{ __html: show.summary }} />
        {(episodes && episodes.length) && episodes.map((episode) => (
          <a key={episode.id} href={episode.url} target="_blank">
            <img alt={episode.name} src={episode.image.medium} />
          </a>
        ))}
      </Section>
      <Section component="footer" className="z-10">
        <p className="text-sm">
          <a href={show.url} target="_blank">{show.name}</a> is available on <a href={show.officialSite} target="_blank">{show.webChannel.name}</a>.
        </p>
      </Section>
    </div>
  );
};
