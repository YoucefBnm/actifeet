import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "@/store/cart/cart.selector";
import {
  addCartItemStart,
  clearCartItemStart,
  removeCartItemStart,
} from "@/store/cart/cart.action";
import { AddIcon, DeductIcon } from "@/assets";
import { setPrice } from "@/utils/price.utils";
import { Link } from "react-router-dom";
import { CartItemProps } from "@/store/cart/cart.types";

const CartItemGroup = ({
  segment,
  value,
}: {
  segment: string;
  value: string;
}) => {
  return (
    <div className="flex gap-2 font-semibold text-sm capitalize">
      <p className=" text-neutral-500">{segment}:</p>
      <p>{value}</p>
    </div>
  );
};

const CartItemUtils = ({ cartItem }: { cartItem: CartItemProps }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItem = () => dispatch(addCartItemStart(cartItems, cartItem));
  const removeItem = () => dispatch(removeCartItemStart(cartItems, cartItem));

  return (
    <div className="flex flex-1 gap-4">
      <div className="flex w-32 items-center justify-center gap-2">
        <button
          role="button"
          aria-label="deduct item quantity"
          className="p-1 transition-opacity hover:opacity-75 rounded-full"
          onClick={removeItem}
        >
          <img width={16} height={16} src={DeductIcon} aria-hidden="true" />
        </button>
        <div className="text-xs font-semibold">{cartItem.quantity}</div>
        <button
          role="button"
          aria-label="increase item quantity"
          className=" appearance-none p-1 transition-colors hover:bg-neutral-100 rounded-full"
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

  return (
    <>
      <div className="flex py-3 px-2 flex-col gap-4 relative w-full">
        <div className="flex justify-between gap-x-4 w-full">
          <Link
            title="visit product page"
            to={`/${cartItem.link}`}
            className="relative py-4 px-2 flex items-center overflow-hidden justify-center w-32 aspect-square rounded-md"
          >
            <img
              className=" align-middle object-contain max-w-full max-h-full"
              src={cartItem.mainImage}
              alt={cartItem.name}
            />
            <div className="absolute inset-0 bg-neutral-950 opacity-5 pointer-events-none" />
          </Link>

          <div className="flex-1 flex-items-start flex-col gap-2">
            <div className="flex self-stretch justify-between gap-x-4 items-center">
              <h4 className="font-semibold  capitalize">{cartItem.name}</h4>
              <button
                role="button"
                aria-label="clear item from cart"
                title="clear item"
                className="w-4 h-4 flex bg-neutral-300 items-center justify-center text-xs appearance-none p-1 transition-colors hover:bg-neutral-500 rounded-full"
                onClick={clearItem}
              >
                <span>&times;</span>
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <CartItemGroup segment="gender" value={cartItem.gender} />
              <CartItemGroup segment="category" value={cartItem.category} />
              <CartItemGroup segment="brand" value={cartItem.brand} />
              <CartItemGroup segment="size" value={cartItem.size} />
              <CartItemGroup segment="color" value={cartItem.color} />
            </div>
          </div>
        </div>

        <CartItemUtils cartItem={cartItem} />
      </div>
    </>
  );
};

export default CartItem;
