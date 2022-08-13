import { Container, Typography, Unstable_Grid2 as Grid } from "@mui/material"

import "./App.css"

import Header from "../components/Header"
import MovieCard from "../components/MovieCard"

import useGetMovies from "../hooks/useGetMovies"

function App() {
  const { data } = useGetMovies()

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
      </Container>
    </>
  )
}

export default App
