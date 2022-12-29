import { ReactLocation } from "@tanstack/react-location"
import { useQuery } from "@tanstack/react-query"

export const getMovies = async (page) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_TMDB_API_BASE_URL}/discover/movie?page=${page}&api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`,
      {
        method: "GET",
      }
    )

    return await response.json()
  } catch (error) {
    return console.error(error)
  }
}
const useGetMovies = () => {
  const location = new ReactLocation()
  return useQuery(["movies"], () =>
    getMovies(location.current.search.page || 1)
  )
}

export default useGetMovies
