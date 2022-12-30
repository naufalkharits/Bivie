import { Container, Typography, Unstable_Grid2 as Grid } from "@mui/material"
import { useRouter } from "@tanstack/react-router"
import { AnimatePresence, motion } from "framer-motion"

import useGetMovies from "../../hooks/useGetMovies"
import useGetTrendingMovies from "../../hooks/useGetTrendingMovies"

import Header from "../../components/Header/Header"
import MovieCard from "../../components/MovieCard"
import PageButton from "../../components/PageButton"
import Topbar from "../../components/Topbar"

const Home = () => {
  const movies = useGetMovies()
  const trendingMovies = useGetTrendingMovies()

  const router = useRouter()

  return (
    <>
      <Topbar />
      <Header trendingMovies={trendingMovies} />
      <Container>
        {!movies.isLoading && (
          <>
            <Typography gutterBottom component="h3" fontSize="1.25rem" fontWeight="500">
              Browse by category
            </Typography>
            <Grid component={motion.div} layout container spacing={2}>
              <AnimatePresence>
                {movies.data?.results.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </AnimatePresence>
            </Grid>
            <PageButton router={router} />
          </>
        )}
      </Container>
    </>
  )
}

export default Home
