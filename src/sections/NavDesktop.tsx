import { Logo } from "@/assets";
import NavLinks from "@/components/NavLinks";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const NavDesktop = () => {
  return (
    <>
      <header className="px-default flex items-center sticky z-50 inset-0 w-screen h-16 bg-white">
        <Link className="block" to="/">
          <img
            width={32}
            height={28}
            alt="actifeet logo"
            loading="lazy"
            decoding="async"
            src={Logo}
          />
        </Link>

        <div className="flex flex-1 justify-center items-center">
          <NavLinks />
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
