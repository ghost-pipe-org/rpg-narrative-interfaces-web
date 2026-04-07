import { Link, useLocation } from "react-router"
import { Button } from "../ui"

interface MenuItemProps {
  label: string
  to: string
}

interface MenuProps {
  menuItems: MenuItemProps[]
}

export const Menu = ({ menuItems }: MenuProps) => {
  const location = useLocation()

  return (
    <div className="flex items-center gap-2">
      {menuItems.map((item) => {
        const isActive = location.pathname === item.to

        return (
          <Button
            key={item.label}
            asChild
            variant={isActive ? "default" : "ghost"}
            size="lg"
          >
            <Link to={item.to}>
              <span className="uppercase shadow-white">{item.label}</span>
            </Link>
          </Button>
        )
      })}
    </div>
  )
}

export default Menu
export { type MenuProps, type MenuItemProps }
