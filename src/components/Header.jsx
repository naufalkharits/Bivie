import { AppBar, Container, Toolbar, Typography } from "@mui/material"
import { Slideshow } from "@mui/icons-material"
import Search from "./Search/Search"

const Header = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Slideshow />
          <Typography
            sx={{ display: { xs: "none", sm: "block" } }}
            component="h1"
            variant="h6"
          >
            Bivie
          </Typography>
          <Search>Search movie</Search>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
