import { Card, CardContent, CardMedia, Typography, Unstable_Grid2 as Grid } from "@mui/material"
import { motion } from "framer-motion"

const MovieCard = (props) => {
  return (
    <Grid
      component={motion.div}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      xs={6}
      sm={4}
      md={3}
      lg={2}>
      <Card sx={{ borderRadius: "0.5rem" }}>
        <CardMedia
          component="img"
          height="264"
          loading="lazy"
          image={`${import.meta.env.VITE_TMDB_API_IMAGE_URL}/w500/${props.movie.poster_path}`}
          alt=""
        />
        <CardContent>
          <Typography component="h2" fontWeight="500" noWrap={true}>
            {props.movie.title}
          </Typography>
          <Typography>
            {`⭐${props.movie.vote_average}`}
            <Typography
              component="span"
              fontWeight="300">{` (${props.movie.vote_count})`}</Typography>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default MovieCard
