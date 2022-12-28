import { useQuery } from "@tanstack/react-query"

export const getTrendingMovies = () =>
  fetch(
    `${import.meta.env.VITE_TMDB_API_BASE_URL}/trending/movie/day?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }`,
    {
      method: "GET",
    }
  ).then((response) => response.json())

const useGetTrendingMovies = () => {
  return useQuery(["trendingMovies"], getTrendingMovies)
}

export default useGetTrendingMovies
