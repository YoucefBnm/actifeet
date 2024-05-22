import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import {
  NavSubmenu,
  menLinks,
  sportsLinks,
  womenLinks,
} from "@/constants/navbarLinks";
import { Link } from "react-router-dom";

const NavLinkItem = (props: NavSubmenu) => {
  const { title, ctaImage, submenu } = props;

  return (
    <NavigationMenuItem className=" shadow-none rounded-none border-none">
      <NavigationMenuTrigger className=" font-heading capitalize text-sm">
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-white border-t border-neutral-100">
        <ul className="w-screen section-container h-80">
          <div className="col-span-5">
            <img
              loading="lazy"
              decoding="async"
              alt={`${title} shoes`}
              height={320}
              width={ctaImage.width}
              src={ctaImage.imageUrl}
              className="h-full "
            />
          </div>

          <ul className="flex py-8 justify-between col-span-6 col-end-12">
            {submenu.map((submenuItem) => (
              <div key={submenuItem.id} className="flex flex-col gap-5">
                <h4 className="font-heading capitalize text-sm text-neutral-500">
                  {submenuItem.title}
                </h4>

                <ul className="flex flex-col gap-3">
                  {submenuItem.links.map((submenuLink) => (
                    <li
                      key={submenuLink.id}
                      className="font-heading text-sm capitalize"
                    >
                      <Link to={submenuLink.route}>{submenuLink.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

const NavLinks = () => {
  return (
    <NavigationMenu className="static ">
      <NavigationMenuList>
        <NavLinkItem
          id={menLinks.id}
          title={menLinks.title}
          ctaImage={menLinks.ctaImage}
          submenu={menLinks.submenu}
        />

        <NavLinkItem
          id={womenLinks.id}
          title={womenLinks.title}
          ctaImage={womenLinks.ctaImage}
          submenu={womenLinks.submenu}
        />

        <NavLinkItem
          id={sportsLinks.id}
          title={sportsLinks.title}
          ctaImage={sportsLinks.ctaImage}
          submenu={sportsLinks.submenu}
        />

        <NavigationMenuItem>
          <Link to="/shop/badge/best seller">
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} text-sm font-heading capitalize`}
            >
              best seller
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/shop/badge/new">
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} text-sm font-heading capitalize`}
            >
              new
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/shop/badge/sale">
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} text-sm font-heading capitalize`}
            >
              sale
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;
