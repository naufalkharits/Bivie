import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { StyledImage } from "./Header.styled"

const Header = (props) => {
  return (
    <Swiper modules={[Pagination]} loop={true} loopedSlides="3" pagination={{ clickable: true }}>
      {props.trendingMovies.data?.results.slice(0, 3).map((movie) => (
        <SwiperSlide key={movie.id}>
          <StyledImage
            src={`${import.meta.env.VITE_TMDB_API_IMAGE_URL}/original/${movie.backdrop_path}`}
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Header
