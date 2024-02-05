import { LogoDark } from "@/assets"
import { NavbarUtils } from "@/components"
import { navbarLinks } from "@/constants/navbarLinks"
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/libs/shadcn/ui/drawer"
import { Cross2Icon, Sheet, SheetContent, SheetTrigger } from "@/libs/shadcn/ui/sheet"
import { Link } from "react-router-dom"

const TogglNavBtn = () => {

  return (
    <DrawerTrigger>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 6H24" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M1 12H24" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M1 18H24" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    </DrawerTrigger>
  )
}

const NavMobile = () => {
  return (
    <header className="p-5">
      <nav className="flex justify-between items-center">
        <Link to='/'>
          <img className="align-middle" alt='actifeet logo dark' src={LogoDark} />
        </Link>

        <NavbarUtils />

        <Drawer direction="right">
          <TogglNavBtn />

          <DrawerContent 
            className="flex flex-col items-start gap-5 p-5"
          >
            <DrawerClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-zinc-100 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 dark:data-[state=open]:bg-zinc-800">
              <Cross2Icon className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DrawerClose>
            {
              navbarLinks.map(navItem => (
                navItem.submenu
                ? (
                  <Sheet key={navItem.id}>
                    <SheetTrigger className="link link-main">{navItem.title}</SheetTrigger>
                    <SheetContent className="flex flex-1 flex-wrap gap-5">
                      {
                        navItem.submenu.map(submenuItem => (
                          <div key={submenuItem.mainTitle} className="flex flex-col gap-3">
                            <h4 className="link link-main">{submenuItem.mainTitle}</h4>
                            <ul className="flex flex-col gap-1.5">
                              {
                                submenuItem.links.map(submenuLink => (
                                  <Link className="link link-sub" key={submenuLink.title} to={submenuLink.route}>{submenuLink.title}</Link>
                                ))
                              }
                            </ul>
                          </div>
                        ))
                      }
                    </SheetContent>
                  </Sheet>
                )
                : (
                  <Link to={navItem.route} key={navItem.id} className="link link-main">{navItem.title}</Link>
                )
              ))
            }
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  )
}

export default NavMobile