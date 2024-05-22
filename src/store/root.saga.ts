import { all, call } from "typed-redux-saga";
import { shopCollectionSagas } from "./shopCollection/shopCollection.saga";

export function* rootSaga() {
  yield* all([call(shopCollectionSagas)]);
}
