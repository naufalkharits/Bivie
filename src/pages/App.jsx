import {
  Container,
  ThemeProvider,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material"
import "./App.css"
import mui from "../../config/mui"
import Header from "../components/Header"
import MovieCard from "../components/MovieCard"

function App() {
  return (
    <ThemeProvider theme={mui}>
      <Header />
      <Container>
        <Typography component="h3" variant="h6">
          Browse by category
        </Typography>
        <Grid container spacing={2}>
          <MovieCard />
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default App
