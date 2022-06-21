import {LOGIN_LOAD} from "./Consts";
import { combineReducers } from 'redux';


export const LoadReducer =  (state = {load: false}, action) => {
    switch (action.type) {
      case LOGIN_LOAD:
        return {
          load: action.payload
        };
      default:
        return state;
    }
}

let Reducers = combineReducers({LoadReducer,});

export default Reducers;