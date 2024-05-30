import { LogoTextWhite } from "@/assets";
import { Separator } from "@/components/ui/separator";
import { footerLinks } from "@/constants/footerLinks";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-default py-12  bg-black text-white">
      <div className="section-container grid-rows-1 md:grid-rows-[max-content_1fr]">
        <div className="flex flex-1 size-fit flex-col gap-4 col-span-8 md:col-span-4">
          <div>
            <img
              width={184}
              height={29}
              loading="lazy"
              decoding="async"
              alt="actifeet logo"
              src={LogoTextWhite}
            />
          </div>
          <p className=" text-sm text-neutral-300">
            Explore our collections and find the perfect pair of shoes to
            elevate your athletic performance.
          </p>
        </div>

        <nav className="row-start-2 col-span-12 mt-8 md:mt-0 md:row-start-1 col-start-1 md:col-start-6">
          <ul className="flex flex-wrap justify-between">
            {footerLinks.map((item) => (
              <li
                key={item.id}
                className="link flex flex-col gap-4 last-of-type:ml-8"
              >
                <span className=" text-neutral-300">{item.title}</span>
                <ul className="flex flex-col items-start gap-2">
                  {item.links.map((link) => (
                    <li className="" key={link.title}>
                      <Link to={link.route}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <Separator className="my-6" />

      <small className="text-xs text-neutral-500">
        &copy;2024 Developed by{" "}
        <a
          className=" text-neutral-300"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          ycf.dev
        </a>
        &nbsp;all rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
