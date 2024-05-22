import { Logo } from "@/assets";
// import { navbarLinks } from "@/constants/navbarLinks";
import Spinner from "@/components/Spinner";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { cn } from "@/libs/shadcn/shadcn";
import React from "react";
import { navbarLinks } from "@/constants/navbarLinks";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const NavDesktop = () => {
  return (
    <>
      <header className="px-default sticky z-50 top-0 left-0 w-screen h-16 bg-white flex items-center  ">
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

        <div className="flex-1  flex justify-center">
          <NavigationMenu className="rounded-none border-none static">
            <NavigationMenuList className="rounded-none border-none">
              <NavigationMenuItem className="rounded-none border-none">
                <NavigationMenuTrigger className="font-heading capitalize text-sm">
                  {navbarLinks[0].title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white border-t border-neutral-100">
                  <ul className="w-screen section-container h-80">
                    <div className="col-span-5 ">
                      <img
                        width={260}
                        height={320}
                        loading="lazy"
                        decoding="async"
                        alt={`${navbarLinks[0].title} shoes`}
                        src={navbarLinks[0].ctaImage}
                      />
                    </div>

                    <div className="flex py-8 justify-between  col-span-6 col-end-12">
                      <div
                        key={navbarLinks[0].submenu[0].mainTitle}
                        className="flex flex-col gap-4"
                      >
                        <p className="font-heading capitalize text-sm text-neutral-500">
                          {navbarLinks[0].submenu[0].mainTitle}
                        </p>

                        <ul className="flex flex-col gap-2">
                          {navbarLinks[0].submenu[0].links.map((navLink) => (
                            <li
                              key={`${navbarLinks[0].submenu[0].mainTitle}-${navLink.title}`}
                            >
                              <Link
                                to={navLink.route}
                                className="font-heading capitalize text-sm"
                              >
                                {navLink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        key={navbarLinks[0].submenu[1].mainTitle}
                        className="flex flex-col gap-4"
                      >
                        <p className="font-heading capitalize text-sm text-neutral-500">
                          {navbarLinks[0].submenu[1].mainTitle}
                        </p>

                        <ul className="flex flex-col gap-2">
                          {navbarLinks[0].submenu[1].links.map((navLink) => (
                            <li
                              key={`${navbarLinks[0].submenu[1].mainTitle}-${navLink.title}`}
                            >
                              <Link
                                to={navLink.route}
                                className="font-heading capitalize text-sm"
                              >
                                {navLink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        key={navbarLinks[0].submenu[2].mainTitle}
                        className="flex flex-col gap-4"
                      >
                        <p className="font-heading capitalize text-sm text-neutral-500">
                          {navbarLinks[0].submenu[2].mainTitle}
                        </p>

                        <ul className="flex flex-col gap-2">
                          {navbarLinks[0].submenu[2].links.map((navLink) => (
                            <li
                              key={`${navbarLinks[0].submenu[2].mainTitle}-${navLink.title}`}
                            >
                              <Link
                                to={navLink.route}
                                className="font-heading capitalize text-sm"
                              >
                                {navLink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        key={navbarLinks[0].submenu[3].mainTitle}
                        className="flex flex-col gap-4"
                      >
                        <p className="font-heading capitalize text-sm text-neutral-500">
                          {navbarLinks[0].submenu[3].mainTitle}
                        </p>

                        <ul className="flex flex-col gap-2">
                          {navbarLinks[0].submenu[3].links.map((navLink) => (
                            <li
                              key={`${navbarLinks[0].submenu[3].mainTitle}-${navLink.title}`}
                            >
                              <Link
                                to={navLink.route}
                                className="font-heading capitalize text-sm"
                              >
                                {navLink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="rounded-none border-none">
                <NavigationMenuTrigger className="font-heading capitalize text-sm">
                  {navbarLinks[1].title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white border-t border-neutral-100">
                  <ul className="w-screen section-container h-80">
                    <div className="col-span-5">
                      <img
                        width={260}
                        height={320}
                        loading="lazy"
                        decoding="async"
                        alt={`${navbarLinks[1].title} shoes`}
                        src={navbarLinks[1].ctaImage}
                      />
                    </div>

                    <div className="flex py-8 justify-between  col-span-6 col-end-12">
                      <div
                        key={navbarLinks[1].submenu[0].mainTitle}
                        className="flex flex-col gap-4"
                      >
                        <p className="font-heading capitalize text-sm text-neutral-500">
                          {navbarLinks[1].submenu[0].mainTitle}
                        </p>

                        <ul className="flex flex-col gap-2">
                          {navbarLinks[1].submenu[0].links.map((navLink) => (
                            <li
                              key={`${navbarLinks[1].submenu[0].mainTitle}-${navLink.title}`}
                            >
                              <Link
                                to={navLink.route}
                                className="font-heading capitalize text-sm"
                              >
                                {navLink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        key={navbarLinks[1].submenu[1].mainTitle}
                        className="flex flex-col gap-4"
                      >
                        <p className="font-heading capitalize text-sm text-neutral-500">
                          {navbarLinks[0].submenu[1].mainTitle}
                        </p>

                        <ul className="flex flex-col gap-2">
                          {navbarLinks[0].submenu[1].links.map((navLink) => (
                            <li
                              key={`${navbarLinks[0].submenu[1].mainTitle}-${navLink.title}`}
                            >
                              <Link
                                to={navLink.route}
                                className="font-heading capitalize text-sm"
                              >
                                {navLink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        key={navbarLinks[0].submenu[2].mainTitle}
                        className="flex flex-col gap-4"
                      >
                        <p className="font-heading capitalize text-sm text-neutral-500">
                          {navbarLinks[0].submenu[2].mainTitle}
                        </p>

                        <ul className="flex flex-col gap-2">
                          {navbarLinks[0].submenu[2].links.map((navLink) => (
                            <li
                              key={`${navbarLinks[0].submenu[2].mainTitle}-${navLink.title}`}
                            >
                              <Link
                                to={navLink.route}
                                className="font-heading capitalize text-sm"
                              >
                                {navLink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        key={navbarLinks[0].submenu[3].mainTitle}
                        className="flex flex-col gap-4"
                      >
                        <p className="font-heading capitalize text-sm text-neutral-500">
                          {navbarLinks[0].submenu[3].mainTitle}
                        </p>

                        <ul className="flex flex-col gap-2">
                          {navbarLinks[0].submenu[3].links.map((navLink) => (
                            <li
                              key={`${navbarLinks[0].submenu[3].mainTitle}-${navLink.title}`}
                            >
                              <Link
                                to={navLink.route}
                                className="font-heading capitalize text-sm"
                              >
                                {navLink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="rounded-none border-none">
                <NavigationMenuTrigger className="font-heading capitalize text-sm">
                  {navbarLinks[2].title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white border-t border-neutral-100">
                  <ul className="w-screen section-container h-80">
                    <div className="col-span-5">
                      <img
                        width={440}
                        height={320}
                        loading="lazy"
                        decoding="async"
                        alt={`${navbarLinks[2].title} shoes`}
                        src={navbarLinks[2].ctaImage}
                        className="h-full w-2/3"
                      />
                    </div>

                    <div className="flex py-8 justify-between  col-span-6 col-end-12">
                      <div
                        key={navbarLinks[2].submenu[0].mainTitle}
                        className="flex flex-col gap-4"
                      >
                        <p className="font-heading capitalize text-sm text-neutral-500">
                          {navbarLinks[2].submenu[0].mainTitle}
                        </p>

                        <ul className="flex flex-col gap-2">
                          {navbarLinks[2].submenu[0].links.map((navLink) => (
                            <li
                              key={`${navbarLinks[2].submenu[0].mainTitle}-${navLink.title}`}
                            >
                              <Link
                                to={navLink.route}
                                className="font-heading capitalize text-sm"
                              >
                                {navLink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        key={navbarLinks[2].submenu[1].mainTitle}
                        className="flex flex-col gap-4"
                      >
                        <p className="font-heading capitalize text-sm text-neutral-500">
                          {navbarLinks[2].submenu[1].mainTitle}
                        </p>

                        <ul className="flex flex-col gap-2">
                          {navbarLinks[2].submenu[1].links.map((navLink) => (
                            <li
                              key={`${navbarLinks[2].submenu[1].mainTitle}-${navLink.title}`}
                            >
                              <Link
                                to={navLink.route}
                                className="font-heading capitalize text-sm"
                              >
                                {navLink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        key={navbarLinks[2].submenu[2].mainTitle}
                        className="flex flex-col gap-4"
                      >
                        <p className="font-heading capitalize text-sm text-neutral-500">
                          {navbarLinks[2].submenu[2].mainTitle}
                        </p>

                        <ul className="flex flex-col gap-2">
                          {navbarLinks[2].submenu[2].links.map((navLink) => (
                            <li
                              key={`${navbarLinks[2].submenu[2].mainTitle}-${navLink.title}`}
                            >
                              <Link
                                to={navLink.route}
                                className="font-heading capitalize text-sm"
                              >
                                {navLink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        key={navbarLinks[2].submenu[3].mainTitle}
                        className="flex flex-col gap-4"
                      >
                        <p className="font-heading capitalize text-sm text-neutral-500">
                          {navbarLinks[2].submenu[3].mainTitle}
                        </p>

                        <ul className="flex flex-col gap-2">
                          {navbarLinks[2].submenu[3].links.map((navLink) => (
                            <li
                              key={`${navbarLinks[2].submenu[3].mainTitle}-${navLink.title}`}
                            >
                              <Link
                                to={navLink.route}
                                className="font-heading capitalize text-sm"
                              >
                                {navLink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
