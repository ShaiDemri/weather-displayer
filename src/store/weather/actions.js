import {FETCH_WEATHER} from './types'

export function fetchWeather(payload) {
    return {
        type: FETCH_WEATHER,
        query:payload
    }
}