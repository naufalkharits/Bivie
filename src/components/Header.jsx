import {
  AppBar,
  Button,
  Container,
  styled,
  Toolbar,
  Typography,
} from "@mui/material"
import { Slideshow } from "@mui/icons-material"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import Search from "./Search/Search"

import useGetTrendingMovies from "../hooks/useGetTrendingMovies"

export const StyledImage = styled("img")(({ theme }) => ({
  height: "24rem",
  width: "100%",
  objectFit: "cover",
}))

const Header = () => {
  const { data } = useGetTrendingMovies()

  return (
    <>
      <AppBar
        sx={{ backgroundColor: "primary.contrastText" }}
        position="static"
      >
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }} disableGutters>
            <Toolbar disableGutters>
              <Slideshow fontSize="large" color="primary" />
              <Typography
                sx={{ display: { xs: "none", sm: "block" } }}
                component="h1"
                color="secondary.contrastText"
              >
                Bivie
              </Typography>
              <Search />
            </Toolbar>
            <Button>Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Swiper
        modules={[Pagination]}
        loop={true}
        pagination={{ clickable: true }}
      >
        {data?.results.slice(0, 3).map((trendingMovie) => (
          <SwiperSlide key={trendingMovie.id}>
            <StyledImage
              src={`${import.meta.env.VITE_TMDB_API_IMAGE_URL}/original/${
                trendingMovie.backdrop_path
              }`}
              alt=""
            />
            <Typography
              sx={{ position: "absolute", top: "4rem", left: "2rem" }}
              component="h2"
              variant="h4"
            >
              {trendingMovie.title}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Header
