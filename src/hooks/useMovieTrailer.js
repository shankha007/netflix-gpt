import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

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
    if (!trailerVideo) getMovieVideos();
  }, [getMovieVideos, trailerVideo]);
};

export default useMovieTrailer;
