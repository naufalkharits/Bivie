import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ThemeProvider } from "@mui/material"
import mui from "../config/mui"
import App from "./pages/App"
import "./index.css"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={mui}>
        <App />
        <ReactQueryDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
