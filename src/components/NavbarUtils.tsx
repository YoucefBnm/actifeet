import { IconCart, IconSearch, IconUser } from "@/assets"
import { Link } from "react-router-dom"
import { ToggleNavOpenIcon } from "@/assets"

const NavbarUtils = () => {
  return (
    <ul className="flex items-center">
        <li className="py-2 px-2 link">
            <Link to='/search'>
                <img className="align-middle" src={IconSearch} width={24} height={24} />
            </Link>
        </li>

        <li className="py-2 px-2 link">
            <Link to='/login'>
                <img className="align-middle" src={IconUser} width={24} height={24} />
            </Link>
        </li>

        <li className="py-2 px-2 link">
            <span aria-label="cart trigger">
                <img className="align-middle" src={IconCart} width={24} height={24} />
            </span>
        </li>

        <li className="py px-2 link">
            <span>
                <img src={ToggleNavOpenIcon} />
            </span>
        </li>
    </ul>
  )
}

export default NavbarUtils