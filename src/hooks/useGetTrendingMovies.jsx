import { useQuery } from "@tanstack/react-query"

async function getTrendingMovies() {
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

function useGetTrendingMovies() {
  return useQuery(["trendingMovies"], getTrendingMovies)
}

export default useGetTrendingMovies
