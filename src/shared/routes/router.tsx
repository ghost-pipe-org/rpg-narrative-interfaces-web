import { createBrowserRouter } from "react-router"
import { Landing, NotFound } from "@/shared/pages"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/kaos-em-nova-patos",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
])
