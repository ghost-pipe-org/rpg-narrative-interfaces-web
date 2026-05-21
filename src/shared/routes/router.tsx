import { createBrowserRouter } from "react-router"
import { Landing } from "@/shared/pages/Landing"
import { Login } from "@/shared/pages/Login"
import { Members } from "@/shared/pages/Members"
import { NotFound } from "@/shared/pages/NotFound"
import { Register } from "@/shared/pages/Register"
import { About } from "@/shared/pages/About"

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
