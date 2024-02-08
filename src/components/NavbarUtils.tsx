import { IconSearch, IconUser } from "@/assets"
import { Link } from "react-router-dom"
import { AuthDropdown, Cart } from "."

const NavbarUtils = () => {
  return (
    <ul className="flex items-center">
        <li className="py-2 px-2 link">
            <Link to='/search'>
                <img width={24} height={24} className="align-middle" src={IconSearch} />
            </Link>
        </li>

        <li className="py-2 px-2 link">
            {/* <Link to='/login'>
                <img className="align-middle" src={IconUser} width={24} height={24} />
            </Link> */}
            <AuthDropdown />
        </li>

        <li className="py-2 px-2 link">
            <Cart />
        </li>
    </ul>
  )
}

export default NavbarUtils