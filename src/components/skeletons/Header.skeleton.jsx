import { Skeleton } from "@mui/material"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

function HeaderSkeleton() {
  return (
    <Swiper modules={[Pagination]} loop={true} loopedSlides="3" pagination={{ clickable: true }}>
      <SwiperSlide>
        <Skeleton variant="rectangular" width="100%" height="24rem" />
      </SwiperSlide>
      <SwiperSlide>
        <Skeleton variant="rectangular" width="100%" height="24rem" />
      </SwiperSlide>
      <SwiperSlide>
        <Skeleton variant="rectangular" width="100%" height="24rem" />
      </SwiperSlide>
    </Swiper>
  )
}

export default HeaderSkeleton
