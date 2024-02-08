import { LogoDark } from "@/assets"
import { NavbarUtils } from "@/components";
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
          <NavigationMenuContent className=" w-full">
            <ul className="flex pr-4 xl:pr-12 justify-between  w-screen">
              <div className="h-full">
                <img  src={props.ctaImage} alt={props.title} className=" object-contain align-middle" />
              </div>
              <div className="flex justify-evenly flex-1 py-5">
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
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const NavDesktop = () => {
  return (
    <header className="sticky w-screen z-50 top-0 left-0 h-[72px] bg-white px-default py-4 flex items-center justify-between">
      <Link to='/'>
        <img src={LogoDark} className="align-middle" width={113} height={20} alt="actifeet logo" />
      </Link>

      <nav className=" flex items-center justify-between">
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
              <Link key={navLink.id} to={navLink.route} className={`${navLink.title==='sale' ? ' text-red-500 link p-2' : 'link p-2'}`}>{navLink.title}</Link>
            )
          ))
        }
      </nav>

      <NavbarUtils />
    </header>
  )
}

export default NavDesktop