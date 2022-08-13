import {
  Card,
  Unstable_Grid2 as Grid,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material"

import SaintSeiya from "../assets/images/saintseiya 1.png"

const MovieCard = ({ movie }) => {
  return (
    <Grid xs={6} sm={3} md={2}>
      <Card>
        <CardMedia
          component="img"
          image={`${import.meta.env.VITE_TMDB_API_IMAGE_URL}/w500/${
            movie.poster_path
          }`}
          alt=""
        />
        <CardContent>
          <Typography component="h2" noWrap={true}>
            {movie.original_title}
          </Typography>
          <Typography>{`⭐${movie.vote_average} (${movie.vote_count})`}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default MovieCard
