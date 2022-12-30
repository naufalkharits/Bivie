import { useQuery } from "@tanstack/react-query"

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_TMDB_API_BASE_URL}/trending/movie/day?api_key=${
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

const useGetTrendingMovies = () => {
  return useQuery(["trendingMovies"], getTrendingMovies)
}

export default useGetTrendingMovies
