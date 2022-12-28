import { createReactRouter } from "@tanstack/react-router"
import { createRouteConfig } from "@tanstack/router-core"

import Home from "./Home"

const rootRoute = createRouteConfig()

const indexRoute = rootRoute.createRoute({
  path: "/",
  component: Home,
})
const routeConfig = rootRoute.addChildren([indexRoute])

const router = createReactRouter({ routeConfig })

export default router
