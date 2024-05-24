import Cart from "./Cart";
import NavAuth from "./NavAuth";
import NavSearch from "./NavSearch";

const NavUtils = () => {
  return (
    <ul className="flex justify-end">
      <NavSearch />

      <NavAuth />

      <Cart />
    </ul>
  );
};

export default NavUtils;
