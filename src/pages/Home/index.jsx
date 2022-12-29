import { Container, Typography, Unstable_Grid2 as Grid } from "@mui/material"
import { useRouter } from "@tanstack/react-router"

import Header from "../../components/Header"
import MovieCard from "../../components/MovieCard"
import PageButton from "../../components/PageButton"

import useGetMovies from "../../hooks/useGetMovies"

const Home = () => {
  const { data } = useGetMovies()
  const router = useRouter()

  return (
    <>
      <Header />
      <Container>
        <Typography gutterBottom component="h3">
          Browse by category
        </Typography>
        <Grid container spacing={2}>
          {data?.results?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Grid>
        <PageButton router={router} />
      </Container>
    </>
  )
}

export default Home
