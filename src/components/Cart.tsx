import { CartIcon } from "@/assets";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";
import { useSelector } from "react-redux";
import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
  selectLoading,
} from "@/store/cart/cart.selector";
import { ScrollArea } from "./ui/scroll-area";
import { useWindowHeight } from "@react-hook/window-size/throttled";

const CartContainer = () => {
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);
  const isLoading = useSelector(selectLoading);
  const windowHeight = useWindowHeight();

  return (
    // classname
    <DrawerContent>
      {/* className */}
      <DrawerHeader className=" h-16 flex px-6 items-center justify-between">
        <DrawerClose>
          <span className="text-2xl">&times;</span>
          <span className="font-heading">Your Cart: {cartCount}</span>
        </DrawerClose>
      </DrawerHeader>
    </DrawerContent>
  );
};

const Cart = () => {
  const cartItemsCount = useSelector(selectCartCount);

  return (
    <Drawer>
      <div className="relative cursor-pointer py-2 mx-2  flex items-center">
        <DrawerTrigger className="">
          <img width={24} height={24} aria-hidden src={CartIcon} />
        </DrawerTrigger>

        {cartItemsCount > 0 && (
          <div className=" mt-0.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute pointer-events-none tracking-tighter flex justify-center items-center size-4 rounded-full text-[8px] text-black text-center">
            {cartItemsCount > 10 ? "+10" : cartItemsCount}
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default Cart;
