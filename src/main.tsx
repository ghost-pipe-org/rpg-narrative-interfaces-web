import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router"

import { AuthProvider } from "@/shared/contexts/auth-context"

import { ThemeProvider } from "@/shared/components/theme/theme-provider"
import { router } from "@/shared/routes/router"

import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
)
