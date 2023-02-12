import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ error: false, msg: "" });
  const [movies, setMovies] = useState(null);

  const getMovies = async (url) => {
    if (!url) {
      setIsLoading(false);
      setError({ error: false, msg: "" });
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_API_KEY
        }&s=${url}`
      );
      const data = await response.json();
      if (data?.Error) {
        setError({ error: true, msg: data.Error });
        setMovies(null);
      } else {
        setError({ error: false, msg: "" });
        setMovies(data);
      }
    } catch (error) {
      setError(true);
      setMovies(null);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies(url);
  }, [url]);

  return { isLoading, error, movies };
};

export default useFetch;
