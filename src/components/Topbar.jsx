import { Slideshow } from "@mui/icons-material"
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material"

import Search from "./Search/Search"

const Topbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "white" }} position="static">
      <Container>
        <Toolbar sx={{ justifyContent: "space-between" }} disableGutters>
          <Toolbar disableGutters>
            <Slideshow fontSize="large" color="primary" />
            <Typography sx={{ display: { xs: "none", sm: "block" } }} component="h1" color="black">
              Bivie
            </Typography>
            <Search />
          </Toolbar>
          <Button>Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Topbar
