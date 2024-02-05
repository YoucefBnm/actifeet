import { all, call } from 'redux-saga/effects';
import { shopCollectionSaga } from './shopCollection/shopCollection.saga';

export function* rootSaga() {
    yield all([
        call(shopCollectionSaga)
    ])
}