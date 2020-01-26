import * as types from './types'

const initialState = {
    citiesData:[]
};

export default function weather(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_WEATHER:
            return state;
        default:
            return state
    }
}
