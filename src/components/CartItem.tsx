import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "@/store/cart/cart.selector";
import {
  addCartItemStart,
  clearCartItemStart,
  removeCartItemStart,
} from "@/store/cart/cart.action";
import { AddIcon, DeductIcon } from "@/assets";
import { setPrice } from "@/utils/price.utils";
import { useNavigate } from "react-router-dom";
import { CartItemProps } from "@/store/cart/cart.types";

const CartItemGroup = ({
  segment,
  value,
}: {
  segment: string;
  value: string;
}) => {
  return (
    <div className="flex gap-2  font-heading text-sm capitalize">
      <p className=" w-16 text-neutral-500 ">{segment}:</p>
      <p className=" text-ellipsis truncate">{value}</p>
    </div>
  );
};

const CartItemUtils = ({ cartItem }: { cartItem: CartItemProps }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItem = () => dispatch(addCartItemStart(cartItems, cartItem));
  const removeItem = () => dispatch(removeCartItemStart(cartItems, cartItem));

  return (
    <div className="flex flex-col gap-2 w-32">
      <div className="flex items-center  justify-center gap-1">
        <button
          role="button"
          aria-label="deduct item quantity"
          className="p-1 rounded-full transition-opacity hover:opacity-30"
          onClick={removeItem}
        >
          <img width={16} height={16} src={DeductIcon} aria-hidden="true" />
        </button>
        <div className="text-xs font-semibold">{cartItem.quantity}</div>
        <button
          role="button"
          aria-label="increase item quantity"
          className="p-1 transition-colors hover:bg-neutral-100 rounded-full"
          onClick={addItem}
        >
          <img width={16} height={16} src={AddIcon} aria-hidden="true" />
        </button>
      </div>

      <CartItemGroup
        segment="Total"
        value={`$${setPrice(+cartItem.price * cartItem.quantity, null)}`}
      />
    </div>
  );
};
const CartItem = ({ cartItem }: { cartItem: CartItemProps }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItem = () => dispatch(clearCartItemStart(cartItems, cartItem));

  const navigate = useNavigate();
  const navigateToProductPage = () => navigate(`/product/${cartItem.link}`);

  return (
    <div className="flex py-3 px-2 flex-col relative w-full">
      <div className="flex justify-between gap-x-4 w-full">
        <div
          onClick={navigateToProductPage}
          className="block self-start cursor-pointer"
          title="visit product page"
        >
          <div className="relative p-4 size-32 flex items-center overflow-hidden justify-center  aspect-square rounded-md">
            <img
              className=" align-middle object-contain max-w-full max-h-full"
              src={cartItem.mainImage}
              alt={cartItem.name}
            />
            <div className="absolute inset-0 bg-neutral-950 opacity-5 pointer-events-none" />
          </div>
        </div>
        <div className="flex-1 flex-items-start justify-start flex-col gap-2">
          <div className="flex relative justify-end gap-x-4 items-center">
            <button
              role="button"
              aria-label="clear item from cart"
              title="clear item"
              className="size-4 flex bg-neutral-300 items-center justify-center text-xs  p-1 transition-colors hover:bg-neutral-500 rounded-full absolute right-0 top-0"
              onClick={clearItem}
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="flex flex-col  gap-2">
            <CartItemGroup segment="gender" value={cartItem.gender} />
            <CartItemGroup segment="category" value={cartItem.category} />
            <CartItemGroup segment="brand" value={cartItem.brand} />
            <CartItemGroup segment="name" value={cartItem.name} />
            <CartItemGroup segment="size" value={cartItem.size} />
            <CartItemGroup segment="color" value={cartItem.color} />
          </div>
        </div>
      </div>
      <CartItemUtils cartItem={cartItem} />
    </div>
  );
};

export default CartItem;
