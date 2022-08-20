import {
  Container,
  Pagination,
  PaginationItem,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material"
import { ReactLocation, useNavigate } from "@tanstack/react-location"

import Header from "../../components/Header"
import MovieCard from "../../components/MovieCard"

import useGetMovies from "../../hooks/useGetMovies"

const Home = () => {
  const location = new ReactLocation()
  // const navigate = useNavigate()
  const { data } = useGetMovies()

  // const nextPage = () => {
  //   navigate({
  //     search: (old) => ({
  //       ...old,
  //       pagination: {
  //         ...old.pagination,
  //         index: old.pagination.index + 1,
  //       },
  //     }),
  //   })
  // }
  // const previousPage = () => {
  //   navigate({
  //     search: (old) => ({
  //       ...old,
  //       pagination: {
  //         ...old.pagination,
  //         index: old.pagination.index - 1,
  //       },
  //     }),
  //   })
  // }

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
        <Pagination
          page={location.current.search.page || 1}
          count={500}
          renderItem={(item) => (
            <PaginationItem
              component={"a"}
              href={item.page === 1 ? "/" : `?page=${item.page}`}
              {...item}
            />
          )}
        />
      </Container>
    </>
  )
}

export default Home
