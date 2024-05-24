import { combineReducers } from "redux";
import { shopCollectionReducer } from "./shopCollection/shopCollection.reducer";
import { userReducer } from "./user/user.reducer";
import { searchProductsReducer } from "./searchProducts/searchProducts.reducer";

export const rootReducer = combineReducers({
  shopCollection: shopCollectionReducer,
  user: userReducer,
  searchProducts: searchProductsReducer,
});
