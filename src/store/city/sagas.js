import {
    call,
    put,
    takeEvery,
    cancelled,
} from 'redux-saga/effects'
import {
    SELECT_CITY,
    SELECT_CITY_SUCCESS,
} from './types'

// worker saga
export function* selectCity(payload) {
    try {
        yield put({type: SELECT_CITY_SUCCESS, payload});
    } catch (error) {
        console.log(error);
        yield put({type: SELECT_CITY + '_ERROR', error})
    } finally {
        if (yield cancelled()) {
            // ... put special cancellation handling code here
        }
    }
}
function* selectCitySaga(payload) {
    yield takeEvery(SELECT_CITY, selectCity);
}



export const citySagas = [
    call(selectCitySaga),
];