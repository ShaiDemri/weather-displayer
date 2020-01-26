import * as types from './types'
import {xor} from 'lodash';

export const CITIES_NAME = ["Miami", "Oakland", "Chicago", "Houston", "Dallas", "Austin", "Seattle", "Boston", "Detroit", "Memphis"];

const initialState = {
    selectedCities:[]
};

export default function cities(state = initialState, action) {
    switch (action.type) {
        case types.SELECT_CITY_SUCCESS:
            return {
                ...state,
                selectedCities:xor(state.selectedCities, [action.city])
            };
        default:
            return state
    }
}
