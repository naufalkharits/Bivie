import { RouterProvider } from "@tanstack/react-router"
import { lazy } from "react"
const TanStackRouterDevtools =
  process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging"
    ? () => null
    : lazy(() =>
        import("@tanstack/react-router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      )

import router from "./pages"

import "./App.css"

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} position="bottom-right" />
    </>
  )
}

export default App
