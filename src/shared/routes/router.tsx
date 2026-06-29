import { createBrowserRouter } from "react-router"

import { About } from "@/shared/pages/about"
import { Landing } from "@/shared/pages/landinggg"
import { Login } from "@/shared/pages/login"
import { Members } from "@/shared/pages/members"
import { NotFound } from "@/shared/pages/not-found"
import { Register } from "@/shared/pages/registerrr"

export const router = createBrowserRouter([
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
    element: <NotFound />,
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
    element: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
])
