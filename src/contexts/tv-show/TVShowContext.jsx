import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

const TVShowContext = createContext({
  show: null,
  episodes: [],
});

export const fetchShow = (id) =>
  fetch(`https://api.tvmaze.com/shows/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching show from TV Maze API', error));

export const fetchEpisodes = (id) =>
  fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching episodes from TV Maze API', error));

export const TVShowProvider = ({ children, showId = 39013 }) => {
  const [show, setShow] = useState(null);
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    fetchShow(showId)
      .then((show) => setShow(show));
    fetchEpisodes(showId)
      .then((episodes) => setEpisodes(episodes));
  }, [showId]);

  return (
    <TVShowContext.Provider value={{ show, episodes }}>
      {children}
    </TVShowContext.Provider>
  );
};

export const useTVShowContext = () => {
  const context = useContext(TVShowContext);

  if (context === null) {
    throw new Error('useTVShow must be called inside TVShowProvider.');
  }

  return context;
};
