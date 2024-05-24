import NavLogo from "@/components/NavLogo";
import NavUtils from "@/components/NavUtils";
import Spinner from "@/components/Spinner";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { NavSubmenu, menLinks, womenLinks } from "@/constants/navbarLinks";

import { Suspense, memo } from "react";
import { Link, Outlet } from "react-router-dom";

interface NavDrawerProps {
  title: NavSubmenu["title"];
  submenu: NavSubmenu["submenu"];
}

const NavToggleBtn = () => {
  return (
    <>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 8H26"
          stroke="black"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M2 15H26"
          stroke="black"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M2 22H26"
          stroke="black"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="sr-only">toggle navigation</span>
    </>
  );
};

const NavDrawer = memo(function NavDrawer({ title, submenu }: NavDrawerProps) {
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <span className="font-heading text-sm capitalize">{title}</span>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader className="justify-end">
          <DrawerClose>
            <span className="text-2xl">&times;</span>
          </DrawerClose>
        </DrawerHeader>

        <ul className="flex flex-col items-start gap-2 px-6 ">
          {submenu.map((item) =>
            item.links.map((link) => (
              <Link key={link.id} to={link.route}>
                <DrawerClose className="font-heading capitalize text-sm">
                  {link.title}
                </DrawerClose>
              </Link>
            ))
          )}
        </ul>
      </DrawerContent>
    </Drawer>
  );
});

const NavMobile = () => {
  return (
    <>
      <header className="header">
        <NavLogo />
        <Drawer direction="right">
          <DrawerTrigger>
            <NavToggleBtn />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="justify-end">
              <DrawerClose>x</DrawerClose>
            </DrawerHeader>
            <ul className="flex justify-start items-start flex-col px-6 py-4 gap-4">
              <NavDrawer title="men" submenu={menLinks["submenu"]} />
              <NavDrawer title="women" submenu={womenLinks["submenu"]} />
              <Link to="/shop/badge/best seller">
                <DrawerClose className="font-heading capitalize text-sm">
                  best seller
                </DrawerClose>
              </Link>

              <Link to="/shop/badge/new">
                <DrawerClose className="font-heading capitalize text-sm">
                  new
                </DrawerClose>
              </Link>

              <Link to="/shop/badge/sale">
                <DrawerClose className="font-heading capitalize text-sm">
                  sale
                </DrawerClose>
              </Link>
            </ul>
          </DrawerContent>
        </Drawer>
        <NavUtils />
      </header>
      <Suspense
        fallback={
          <div className="w-screen h-svh flex items-center justify-center">
            <Spinner />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default NavMobile;
