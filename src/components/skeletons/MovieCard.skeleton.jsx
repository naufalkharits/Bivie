import { Card, CardContent, Skeleton, Unstable_Grid2 as Grid } from "@mui/material"

const MovieCardSkeleton = () => {
  return (
    <Grid container spacing={2}>
      {/* #1 */}
      <Grid xs={6} sm={4} md={3} lg={2}>
        <Card sx={{ borderRadius: "0.5rem" }}>
          <Skeleton height={264} variant="rounded" />
          <CardContent>
            <Skeleton />
            <Skeleton width="75%" />
          </CardContent>
        </Card>
      </Grid>

      {/* #2 */}
      <Grid xs={6} sm={4} md={3} lg={2}>
        <Card sx={{ borderRadius: "0.5rem" }}>
          <Skeleton height={264} variant="rounded" />
          <CardContent>
            <Skeleton />
            <Skeleton width="75%" />
          </CardContent>
        </Card>
      </Grid>

      {/* #3 */}
      <Grid xs={6} sm={4} md={3} lg={2}>
        <Card sx={{ borderRadius: "0.5rem" }}>
          <Skeleton height={264} variant="rounded" />
          <CardContent>
            <Skeleton />
            <Skeleton width="75%" />
          </CardContent>
        </Card>
      </Grid>

      {/* #4 */}
      <Grid xs={6} sm={4} md={3} lg={2}>
        <Card sx={{ borderRadius: "0.5rem" }}>
          <Skeleton height={264} variant="rounded" />
          <CardContent>
            <Skeleton />
            <Skeleton width="75%" />
          </CardContent>
        </Card>
      </Grid>

      {/* #5 */}
      <Grid xs={6} sm={4} md={3} lg={2}>
        <Card sx={{ borderRadius: "0.5rem" }}>
          <Skeleton height={264} variant="rounded" />
          <CardContent>
            <Skeleton />
            <Skeleton width="75%" />
          </CardContent>
        </Card>
      </Grid>

      {/* #6 */}
      <Grid xs={6} sm={4} md={3} lg={2}>
        <Card sx={{ borderRadius: "0.5rem" }}>
          <Skeleton height={264} variant="rounded" />
          <CardContent>
            <Skeleton />
            <Skeleton width="75%" />
          </CardContent>
        </Card>
      </Grid>

      {/* #7 */}
      <Grid xs={6} sm={4} md={3} lg={2}>
        <Card sx={{ borderRadius: "0.5rem" }}>
          <Skeleton height={264} variant="rounded" />
          <CardContent>
            <Skeleton />
            <Skeleton width="75%" />
          </CardContent>
        </Card>
      </Grid>

      {/* #8 */}
      <Grid xs={6} sm={4} md={3} lg={2}>
        <Card sx={{ borderRadius: "0.5rem" }}>
          <Skeleton height={264} variant="rounded" />
          <CardContent>
            <Skeleton />
            <Skeleton width="75%" />
          </CardContent>
        </Card>
      </Grid>

      {/* #9 */}
      <Grid xs={6} sm={4} md={3} lg={2}>
        <Card sx={{ borderRadius: "0.5rem" }}>
          <Skeleton height={264} variant="rounded" />
          <CardContent>
            <Skeleton />
            <Skeleton width="75%" />
          </CardContent>
        </Card>
      </Grid>

      {/* #10 */}
      <Grid xs={6} sm={4} md={3} lg={2}>
        <Card sx={{ borderRadius: "0.5rem" }}>
          <Skeleton height={264} variant="rounded" />
          <CardContent>
            <Skeleton />
            <Skeleton width="75%" />
          </CardContent>
        </Card>
      </Grid>

      {/* #11 */}
      <Grid xs={6} sm={4} md={3} lg={2}>
        <Card sx={{ borderRadius: "0.5rem" }}>
          <Skeleton height={264} variant="rounded" />
          <CardContent>
            <Skeleton />
            <Skeleton width="75%" />
          </CardContent>
        </Card>
      </Grid>

      {/* #12 */}
      <Grid xs={6} sm={4} md={3} lg={2}>
        <Card sx={{ borderRadius: "0.5rem" }}>
          <Skeleton height={264} variant="rounded" />
          <CardContent>
            <Skeleton />
            <Skeleton width="75%" />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default MovieCardSkeleton
