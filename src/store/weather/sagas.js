import {call, cancelled, put, select, takeEvery,all} from 'redux-saga/effects'
import {FETCH_WEATHER, FETCH_WEATHER_SUCCESS,} from './types'

import {callServer} from '../api'

// worker saga
export function* fetchWeather() {
    const cities = yield select(state=>state.cities.selectedCities);

    try {
        const data=yield all(cities.map(city => call(callServer, city)));
        yield put({type: FETCH_WEATHER_SUCCESS, data});
        return data
    } catch (error) {
        console.log(error);
        yield put({type: FETCH_WEATHER + '_ERROR', error})
    } finally {
        if (yield cancelled()) {
            // ... put special cancellation handling code here
        }
    }
}

function* fetchWeatherSaga() {
    yield takeEvery(FETCH_WEATHER, fetchWeather);
}

export const weatherSagas = [
    call(fetchWeatherSaga),
];