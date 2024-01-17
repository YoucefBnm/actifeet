import { footerContent } from "@/constants/data"
import { Link } from "react-router-dom"

const Footer = () => {
  
  const { intro, navigation } = footerContent

  return (
    <footer className="px-default py-8 bg-black">
      <div className="flex  items-start gap-y-8 flex-wrap">
       
        <div className="flex flex-col gap-y-6">
          <img width={112} height={20} className="align-middle" alt='actifeet logo' src={intro.image} />
          <p className=" text-zinc-400 text-sm w-[45ch]">{intro.paragraph}</p>

          <div className="flex gap-3 border-b border-zinc-800 pb-4">
            {
              intro.socialLinks.map(socialLink => (
                <a key={socialLink.id} className="block link" href={socialLink.link}>
                  <img className="align-middle" src={socialLink.icon} alt={socialLink.link} width={20} height={20} />
                </a>
              ))
            }
          </div>
          <small className="text-xs text-zinc-500 font-bold">{intro.copyright}</small>
        </div>

        <nav className="flex-1">
            <ul className="flex justify-evenly gap-4 items-start flex-wrap md:items-start md:justify-start">
              {
                navigation.map(navItem => (
                  <div key={navItem.id} className="flex gap-4 flex-col items-start">
                    <h4 className="link text-zinc-400">{navItem.title}</h4>
                    <ul className='flex flex-col items-start gap-4'>
                      {
                        navItem.links.map(navItemLink => (
                          <li className="text-zinc-300 flex-1 w-24 link text-sm" key={navItemLink.id}>
                            <Link to={navItemLink.route}>{navItemLink.title}</Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }
            </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer