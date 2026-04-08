import type { LogoItem } from "@/shared/components"
import {
  logoConedu,
  logoConeduDark,
  logoUepb,
  logoUepbDark,
  logoGhostPipe,
  logoGhostPipeDark,
} from "@/shared/assets"

const linkedEvents: LogoItem[] = [
  {
    id: "1",
    component: (
      <>
        <img
          src={logoConedu}
          alt="Logo Conedu"
          className="object-contain dark:hidden"
        />
        <img
          src={logoConeduDark}
          alt="Logo Conedu"
          className="hidden object-contain dark:block"
        />
      </>
    ),
  },
  {
    id: "2",
    component: (
      <>
        <img
          src={logoGhostPipe}
          alt="Logo GhostPipe"
          className="object-contain dark:hidden"
        />
        <img
          src={logoGhostPipeDark}
          alt="Logo GhostPipe"
          className="hidden object-contain dark:block"
        />
      </>
    ),
  },
  {
    id: "3",
    component: (
      <>
        <img
          src={logoUepb}
          alt="Logo UEPB"
          className="object-contain dark:hidden"
        />
        <img
          src={logoUepbDark}
          alt="Logo UEPB"
          className="hidden object-contain dark:block"
        />
      </>
    ),
  },
]

export default linkedEvents
