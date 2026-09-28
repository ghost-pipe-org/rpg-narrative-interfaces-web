import { createBrowserRouter, Outlet, ScrollRestoration } from "react-router"

import { About } from "@/shared/pages/about"
import { InDevelopment } from "@/shared/pages/in-development"
import { Kaos } from "@/shared/pages/kaos"
import { Landing } from "@/shared/pages/landing"
import { Login } from "@/shared/pages/login"
import { Members } from "@/shared/pages/members"
import { NotFound } from "@/shared/pages/not-found"
import { Register } from "@/shared/pages/register"
import { ResetPassword } from "@/shared/pages/reset-password"
import { VerifyEmail } from "@/shared/pages/verify-email"

function Root() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  )
}

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/members",
        element: <Members />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/kaos",
        element: <Kaos />,
      },
      {
        path: "/blog",
        element: <InDevelopment />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/verify-email",
        element: <VerifyEmail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
])
