import { Container, ThemeProvider, Unstable_Grid2 as Grid } from "@mui/material"
import "./App.css"
import mui from "../../config/mui"
import Header from "../components/Header"
function App() {
  return (
    <ThemeProvider theme={mui}>
      <Header />
    </ThemeProvider>
  )
}

export default App
