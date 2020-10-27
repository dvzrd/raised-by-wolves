import React from 'react';

import { Section } from './components';
import { useTVShow } from './contexts';

export const App = () => {
  const { show } = useTVShow();

  if (!show) return <p>Loading</p>;

  return (
    <div className="flex flex-col flex-no-wrap min-h-screen">
      <Section component="header" className="z-30">
        <h1 className="text-2xl">{show.name}</h1>
      </Section>
      <Section component="main" className="flex-1 z-20">
        <article className="text-lg" dangerouslySetInnerHTML={{ __html: show.summary }} />
      </Section>
      <Section component="footer" className="z-10">
        <p className="text-sm">
          <a href={show.url}>{show.name}</a> is available on {show.webChannel.name}.
        </p>
      </Section>
    </div>
  );
}
