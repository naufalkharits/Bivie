import { Card, CardContent, CardMedia, Typography, Unstable_Grid2 as Grid } from "@mui/material"

const MovieCard = (props) => {
  return (
    <Grid xs={6} sm={3} md={2}>
      <Card>
        <CardMedia
          component="img"
          image={`${import.meta.env.VITE_TMDB_API_IMAGE_URL}/w500/${props.movie.poster_path}`}
          alt=""
        />
        <CardContent>
          <Typography component="h2" noWrap={true}>
            {props.movie.title}
          </Typography>
          <Typography>{`⭐${props.movie.vote_average} (${props.movie.vote_count})`}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default MovieCard
