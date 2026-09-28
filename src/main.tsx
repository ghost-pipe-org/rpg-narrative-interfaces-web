import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router"
import { GoogleOAuthProvider } from "@react-oauth/google"

import { AuthProvider } from "@/shared/contexts/auth-context"

import { ThemeProvider } from "@/shared/components/theme/theme-provider"
import { Toaster } from "@/shared/components/ui/sonner"
import { router } from "@/shared/routes/router"

import "./index.css"

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster position="top-right" closeButton />
        </AuthProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  </StrictMode>
)
