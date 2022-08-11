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
import SaintSeiya from "../assets/images/saint-seiya-banner 1.png"

export const StyledImage = styled("img")(({ theme }) => ({
  height: "24rem",
  width: "100%",
  objectFit: "cover",
}))

const Header = () => {
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
        <SwiperSlide>
          <StyledImage src={SaintSeiya} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={SaintSeiya} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={SaintSeiya} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Header
