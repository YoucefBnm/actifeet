import { combineReducers } from "redux";
import { shopCollectionReducer } from "./shopCollection/shopCollection.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
    shopCollection: shopCollectionReducer,
    cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>;
