import { all, call } from 'redux-saga/effects';
import { shopCollectionSaga } from './shopCollection/shopCollection.saga';
import { cartItemsSaga } from './cart/cart.saga';

export function* rootSaga() {
    yield all([
        call(shopCollectionSaga),
        call(cartItemsSaga)
    ])
}