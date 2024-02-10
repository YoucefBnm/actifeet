import { footerContent } from "@/constants/data"
import { Link } from "react-router-dom"

const Footer = () => {
  
  const { intro, navigation, socialLinks } = footerContent

  return (
    <footer className="px-default py-8 bg-zinc-900">
      <div className="flex items-start gap-10  flex-wrap">
       
        <div className="flex flex-col gap-y-6">
          <img width={112} height={20} className="align-middle" alt='actifeet logo' src={intro.image} />
          <p className=" text-zinc-400 text-sm w-[45ch]">{intro.paragraph}</p>
          <small className="text-xs text-zinc-500 font-bold">{intro.copyright}</small>
        </div>

        <nav className="flex flex-1 gap-8 justify-between items-start flex-wrap md:items-start md:justify-start">
          {
            navigation.map(navItem => (
              <div key={navItem.id} className="flex gap-4 flex-col items-start">
                <h4 className="link text-white">{navItem.title}</h4>
                <ul className='flex flex-col items-start gap-4'>
                  {
                    navItem.links.map(navItemLink => (
                      <li className="text-zinc-400 flex-1 w-24 link text-sm" key={navItemLink.id}>
                        <Link to={navItemLink.route}>{navItemLink.title}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
          <div className="flex gap-4 ml-auto flex-col ">
            <h4 className="link text-white">follow us</h4>
            <div className="flex gap-2">
              {
                socialLinks.map(socialLink => (
                  <a key={socialLink.id} className="block link" href={socialLink.link}>
                    <img className="align-middle" src={socialLink.icon} alt={socialLink.link} width={20} height={20} />
                  </a>
                ))
              }
            </div>
          </div>
        </nav>

      </div>
    </footer>
  )
}

export default Footer