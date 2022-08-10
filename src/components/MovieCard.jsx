import {
  Card,
  Unstable_Grid2 as Grid,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material"
import SaintSeiya from "../assets/images/saintseiya 1.png"

const MovieCard = () => {
  return (
    <Grid xs={6} sm={3} md={2}>
      <Card>
        <CardMedia component="img" image={SaintSeiya} alt="" />
        <CardContent>
          <Typography component="h2" variant="subtitle1">
            Saint Seiya
          </Typography>
          <Typography component="h4" variant="subtitle2">
            Anime
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default MovieCard
