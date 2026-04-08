import { createBrowserRouter } from "react-router"
import { Landing, Members,  NotFound } from "@/shared/pages"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/membros",
    element: <Members />,
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
