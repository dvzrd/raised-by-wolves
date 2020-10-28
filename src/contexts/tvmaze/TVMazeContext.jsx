import React, { createContext, useContext, useEffect, useState } from "react";

const TVMazeContext = createContext({
  show: null,
  cast: [],
  crew: [],
  episodes: [],
  images: [],
});

// TODO:
// - refactor to flux pattern with `createReducer and useReducer`
// - add fetch for crew, get creator and executive producer types to list on landing page.
// - add hero image from background images to provider state using an internal method.

export const fetchShow = (id) =>
  fetch(`https://api.tvmaze.com/shows/${id}`)
    .then((response) => response.json())
    .catch((error) =>
      console.error("Error fetching show from TVMaze API", error)
    );

export const fetchCast = (id) =>
  fetch(`https://api.tvmaze.com/shows/${id}/cast`)
    .then((response) => response.json())
    .catch((error) =>
      console.error("Error fetching cast from TVMaze API", error)
    );

export const fetchCrew = (id) =>
  fetch(`https://api.tvmaze.com/shows/${id}/crew`)
    .then((response) => response.json())
    .catch((error) =>
      console.error("Error fetching crew from TVMaze API", error)
    );

export const fetchEpisodes = (id) =>
  fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
    .then((response) => response.json())
    .catch((error) =>
      console.error("Error fetching episodes from TVMaze API", error)
    );

export const fetchImages = (id) =>
  fetch(`https://api.tvmaze.com/shows/${id}/images`)
    .then((response) => response.json())
    .catch((error) =>
      console.error("Error fetching images from TVMaze API", error)
    );

export const TVMazeProvider = ({ children, showId = 39013 }) => {
  const [show, setShow] = useState(null);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchShow(showId).then((show) => setShow(show));
    fetchCast(showId).then((cast) => setCast(cast));
    fetchCrew(showId).then((crew) => setCrew(crew));
    fetchEpisodes(showId).then((episodes) => setEpisodes(episodes));
    fetchImages(showId).then((images) => setImages(images));
  }, [showId]);

  return (
    <TVMazeContext.Provider value={{ show, cast, crew, episodes, images }}>
      {children}
    </TVMazeContext.Provider>
  );
};

export const useTVMazeContext = () => {
  const context = useContext(TVMazeContext);

  if (context === null) {
    throw new Error("useTVMazeContext must be called inside TVMazeProvider.");
  }

  return context;
};
