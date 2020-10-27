import React from 'react';

import { useTVShow } from "./contexts";

export const App = () => {
  const { show } = useTVShow();

  if (!show) return <p>Loading</p>;

  return (
    <div className="flex flex-col flex-no-wrap min-h-screen">
      <header className="z-30">
        <h1 className="text-2xl">{show.name}</h1>
      </header>
      <main className="flex-1 z-20">
        <article className="text-lg" dangerouslySetInnerHTML={{ __html: show.summary }} />
      </main>
      <footer className="z-10">
        <p className="text-sm">
          <a href={show.url}>{show.name}</a> is available on {show.webChannel.name}.
        </p>
      </footer>
    </div>
  );
}
