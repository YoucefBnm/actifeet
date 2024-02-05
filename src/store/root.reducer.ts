import { combineReducers } from "redux";
import { shopCollectionReducer } from "./shopCollection/shopCollection.reducer";

export const rootReducer = combineReducers({
    shopCollection: shopCollectionReducer
})

export type RootState = ReturnType<typeof rootReducer>;
