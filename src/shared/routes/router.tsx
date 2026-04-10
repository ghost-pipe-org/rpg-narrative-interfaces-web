import { createBrowserRouter } from "react-router"
import { Landing, Login, Members, NotFound, Register, About } from "@/shared/pages"

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
