import { useQuery } from "@tanstack/react-query"
import { useRouter } from "@tanstack/react-router"

async function getMovies(page) {
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

function useGetMovies() {
  const router = useRouter()

  return useQuery(["movies"], () => getMovies(router.state.currentLocation.search.page || 1))
}

export default useGetMovies
