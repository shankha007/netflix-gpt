import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // fetch trailer video and update store
  const getMovieVideos = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filteredVideos = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer =
      filteredVideos.length !== 0 ? filteredVideos[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  }, [dispatch, movieId]);

  useEffect(() => {
    getMovieVideos();
  }, [getMovieVideos]);
};

export default useMovieTrailer;
