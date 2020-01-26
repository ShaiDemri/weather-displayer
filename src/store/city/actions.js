import {SELECT_CITY} from './types'

export function selectCity(payload) {
    return {
        type: SELECT_CITY,
        city:payload
    }
}