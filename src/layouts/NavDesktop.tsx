import { LogoDark } from "@/assets"
import { navbarLinks } from "@/constants/navbarLinks";
import { NavigationMenu, NavigationMenuContent, NavigationMenuTrigger } from "@/libs/shadcn/ui/navigation-menu"
import { NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { Link } from "react-router-dom"

interface SubmenuLinkItem {
  title: string;
  route: string 
}
interface SubmenuItem {
  mainTitle: string;
  links: SubmenuLinkItem[]
}

interface NavbarLinkItem {
  id: string;
  title: string;
  route?: string;
  submenu?: SubmenuItem[];
  ctaImage?: string; 
}

const NavbarSubmenu = (props:NavbarLinkItem) => {

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="link text-base">{props.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex justify-evenly w-screen pr-12 py-4 h-[296px]">
              <div className="h-full">
                <img src={props.ctaImage} alt={props.title} className=" align-middle" />
              </div>
                {
                  props.submenu && props.submenu.map((navSubmenuItem:SubmenuItem) => (
                    <li key={navSubmenuItem.mainTitle} className="flex flex-col gap-4">
                      <h4 className="link text-zinc-400">{navSubmenuItem.mainTitle}</h4>
                      <ul className="flex flex-col gap-3">
                        {navSubmenuItem.links.map((submenuLink:SubmenuLinkItem) => (
                          <Link 
                            key={submenuLink.title}
                            className='link text-sm'
                            to={submenuLink.route}
                          >
                            {submenuLink.title}
                          </Link>
                        ))}
                      </ul>
                    </li>
                  ))
                }
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const NavDesktop = () => {
  return (
    <header className=" px-default py-4 flex items-center justify-between">
      <Link to='/'>
        <img src={LogoDark} className="align-middle" width={113} height={20} alt="actifeet logo" />
      </Link>

      <nav className="flex items-center justify-between">
        {
          navbarLinks.map((navLink:NavbarLinkItem) => (
            navLink.submenu
            ? (
              <NavbarSubmenu
                id={navLink.id}
                key={navLink.id}
                title={navLink.title}
                submenu={navLink.submenu}
                ctaImage={navLink.ctaImage}
              />
            )
            : navLink.route && (
              <Link key={navLink.id} to={navLink.route} className="link p-2">{navLink.title}</Link>
            )
          ))
        }
      </nav>
    </header>
  )
}

export default NavDesktop