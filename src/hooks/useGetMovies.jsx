import { useQuery } from "@tanstack/react-query"

export const getMovies = async () =>
  await fetch(
    `${import.meta.env.VITE_TMDB_API_BASE_URL}/discover/movie?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }`,
    {
      method: "GET",
    }
  ).then((response) => response.json())

const useGetMovies = () => {
  return useQuery(["movies"], getMovies)
}

export default useGetMovies
