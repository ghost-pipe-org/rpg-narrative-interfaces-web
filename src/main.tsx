import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router"

import { AuthProvider } from "@/shared/contexts/auth-context"

import { ThemeProvider } from "@/shared/components/theme/theme-provider"
import { Toaster } from "@/shared/components/ui/sonner"
import { router } from "@/shared/routes/router"

import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" closeButton />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
)
