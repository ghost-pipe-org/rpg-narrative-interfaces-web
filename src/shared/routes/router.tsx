import { createBrowserRouter } from "react-router"
import { Landing, NotFound } from "@/shared/pages"

const basename =
  import.meta.env.BASE_URL.replace(/\/$/, "") || undefined

export const router = createBrowserRouter(
  [
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
  ],
  { basename },
)
