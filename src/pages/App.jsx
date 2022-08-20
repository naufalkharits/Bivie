import { ReactLocation, Router } from "@tanstack/react-location"
// import { MakeGenerics } from "@tanstack/react-location"

import "./App.css"

import Home from "./Home"

function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
  ]

  const location = new ReactLocation()

  return <Router location={location} routes={routes} />
}

export default App
