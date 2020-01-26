import * as types from './types'
import {reduce} from 'lodash';
const initialState = {
    citiesData: []
};

export default function weather(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_WEATHER_SUCCESS:
            const parsedData = reduce(action.data,(acc ,weather)=>{
                const {temp} = weather.data.list[0].main;
                const {name} = weather.data.city;
                const current ={city:name,temp:temp};
                acc.push(current);
                return acc;
            },[]);
            return {
                ...state,
                citiesData: parsedData
            };
        default:
            return state
    }
}
