import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

const TVShowContext = createContext({ show: null });

export const fetchShow = (id) =>
  fetch(`https://api.tvmaze.com/shows/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching show from TV Maze API', error));

export const TVShowProvider = ({ children, showId = 39013 }) => {
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetchShow(showId)
      .then((show) => setShow(show));
  }, [showId]);

  return (
    <TVShowContext.Provider value={{ show }}>
      {children}
    </TVShowContext.Provider>
  );
};

export const useTVShow = () => {
  const context = useContext(TVShowContext);

  if (context === null) {
    throw new Error('useTVShow must be called inside TVShowProvider.');
  }

  return context;
};
