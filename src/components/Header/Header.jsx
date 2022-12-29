import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { StyledImage } from "./Header.styled"

const Header = (props) => {
  return (
    <Swiper modules={[Pagination]} loop={true} pagination={{ clickable: true }}>
      {props.data?.results.slice(0, 3).map((trendingMovie) => (
        <SwiperSlide key={trendingMovie.id}>
          <StyledImage
            src={`${import.meta.env.VITE_TMDB_API_IMAGE_URL}/original/${
              trendingMovie.backdrop_path
            }`}
            alt=""
          />
          {/* <Typography
              sx={{ position: "absolute", top: "4rem", left: "2rem" }}
              component="h2"
              variant="h4"
            >
              {trendingMovie.title}
            </Typography> */}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Header
