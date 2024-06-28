import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const getTrendingMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=2",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    getTrendingMovies();
  }, [getTrendingMovies]);
};

export default useTrendingMovies;
