import weather from './weather/reducer'
import cities from './city/reducer'
import { combineReducers } from 'redux'

const appReducers = combineReducers({
    weather,
    cities
});

export const rootReducer = appReducers;