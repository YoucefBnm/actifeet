import NavLinks from "@/components/NavLinks";
import NavLogo from "@/components/NavLogo";
import NavUtils from "@/components/NavUtils";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const NavDesktop = () => {
  return (
    <>
      <header className="header">
        <NavLogo />

        <div className="flex flex-1 justify-center items-center">
          <NavLinks />
        </div>

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

export default NavDesktop;
