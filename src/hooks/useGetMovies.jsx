import { ReactLocation } from "@tanstack/react-location"
import { useQuery } from "@tanstack/react-query"

export const getMovies = (page) =>
  fetch(
    `${
      import.meta.env.VITE_TMDB_API_BASE_URL
    }/discover/movie?page=${page}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .catch((error) => console.error(error))

const useGetMovies = () => {
  const location = new ReactLocation()
  return useQuery(["movies"], () =>
    getMovies(location.current.search.page || 1)
  )
}

export default useGetMovies
