import type { LogoItem } from "@/shared/components"
import {
  logoConedu,
  logoConeduDark,
  logoUepb,
  logoUepbDark,
  logoGhostPipe,
} from "@/shared/assets"

const linkedEvents: LogoItem[] = [
  {
    id: "1",
    component: (
      <>
        <img
          src={logoConedu}
          alt="Logo Conedu"
          className="h-36 object-contain dark:hidden"
        />
        <img
          src={logoConeduDark}
          alt="Logo Conedu"
          className="hidden h-8 object-contain dark:block"
        />
      </>
    ),
  },
  {
    id: "2",
    component: (
      <img
        src={logoGhostPipe}
        alt="Logo GhostPipe"
        className="p-10 max-w-24 object-contain"
      />
    ),
  },
  {
    id: "",
    component: (
      <>
        <img
          src={logoUepb}
          alt="Logo UEPB"
          className="h-64 object-contain dark:hidden"
        />
        <img
          src={logoUepbDark}
          alt="Logo UEPB"
          className="hidden h-64 object-contain dark:block"
        />
      </>
    ),
  },

]

export default linkedEvents
