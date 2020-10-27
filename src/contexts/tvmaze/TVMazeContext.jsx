import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

const TVMazeContext = createContext({
  show: null,
  episodes: [],
  images: [],
});

export const fetchShow = (id) =>
  fetch(`https://api.tvmaze.com/shows/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching show from TVMaze API', error));

export const fetchEpisodes = (id) =>
  fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching episodes from TVMaze API', error));

export const fetchImages = (id) =>
  fetch(`https://api.tvmaze.com/shows/${id}/images`)
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching images from TVMaze API', error));

export const TVMazeProvider = ({ children, showId = 39013 }) => {
  const [show, setShow] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchShow(showId)
      .then((show) => setShow(show));
    fetchEpisodes(showId)
      .then((episodes) => setEpisodes(episodes));
    fetchImages(showId)
      .then((images) => setImages(images));
  }, [showId]);

  return (
    <TVMazeContext.Provider value={{ show, episodes, images }}>
      {children}
    </TVMazeContext.Provider>
  );
};

export const useTVMazeContext = () => {
  const context = useContext(TVMazeContext);

  if (context === null) {
    throw new Error('useTVMazeContext must be called inside TVMazeProvider.');
  }

  return context;
};
