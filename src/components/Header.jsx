import { AppBar, Container, Toolbar, Typography } from "@mui/material"
import { Slideshow } from "@mui/icons-material"
import Search from "./Search/Search"

const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: "primary.contrastText" }} position="static">
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
          <Typography component="h2" color="secondary.contrastText">
            Sign in
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
