import { Container, Typography, Unstable_Grid2 as Grid } from "@mui/material"
import "./App.css"
import Header from "../components/Header"
import MovieCard from "../components/MovieCard"

function App() {
  return (
    <>
      <Header />
      <Container>
        <Typography gutterBottom component="h3">
          Browse by category
        </Typography>
        <Grid container spacing={2}>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </Grid>
      </Container>
    </>
  )
}

export default App
