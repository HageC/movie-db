import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ error: false, msg: "" });
  const [movies, setMovies] = useState(null);

  const getMovies = async (url) => {
    if (!url) {
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
        console.log(data);
        setError({ error: true, msg: data.Error });
      } else {
        setError({ error: false, msg: "" });
        setMovies(data);
      }
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies(url);
  }, [url]);

  return { isLoading, error, movies };
};

export default useFetch;
