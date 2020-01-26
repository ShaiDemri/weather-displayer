import {
    call,
    put,
    takeEvery,
    cancelled,
    select
} from 'redux-saga/effects'
import {
    FETCH_WEATHER,
    FETCH_WEATHER_SUCCESS,
} from './types'

import {callServer} from '../api'

// worker saga
export function* fetchWeather(payload) {
    try {
        const media = yield call(callServer, '/weather/' + payload.query);
        yield put({type: FETCH_WEATHER_SUCCESS, media});
        return media
    } catch (error) {
        console.log(error);
        yield put({type: FETCH_WEATHER + '_ERROR', error})
    } finally {
        if (yield cancelled()) {
            // ... put special cancellation handling code here
        }
    }
}
function* fetchWeatherSaga(payload) {
    yield takeEvery(FETCH_WEATHER, fetchWeather);
}



export const weatherSagas = [
    call(fetchWeatherSaga),
];