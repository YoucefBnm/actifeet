import NavLinks from "@/components/NavLinks";
import NavLogo from "@/components/NavLogo";
import NavUtils from "@/components/NavUtils";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const NavDesktop = () => {
  return (
    <>
      <header className="header header-desktop">
        <div className="header-desktop-logo">
          <NavLogo />
        </div>

        <div className="flex-center flex-1 header-desktop-links ">
          <NavLinks />
        </div>

        <div className="header-desktop-utils">
          <NavUtils />
        </div>
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

export default NavDesktop;
