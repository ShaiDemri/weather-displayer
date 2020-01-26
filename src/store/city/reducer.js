import * as types from './types'

const initialState = {
    selectedCities:[]
};

export default function cities(state = initialState, action) {
    switch (action.type) {
        case types.SELECT_CITY_SUCCESS:
            console.log("types.SELECT_CITY_SUCCESS action",action)
            return {
                ...state,
                selectedCities: action.payload
            };
        default:
            return state
    }
}
