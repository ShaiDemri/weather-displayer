import { weatherSagas } from './weather/sagas';
import { citySagas } from './city/sagas';
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        ...weatherSagas,
        ...citySagas

    ])
}