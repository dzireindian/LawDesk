import {LOGIN_LOAD, AUTHENTICATE} from "./Consts";
import {AuthenticateAction} from "./Actions";
import { combineReducers } from 'redux';


export const AuthenticateReducer =  (state = {Authenticated: false}, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {...state,Authenticated:action.value};
    default:
      return state;
  }
}

export const LoadReducer =  (state = {load: false}, action) => {
    switch (action.type) {
      case LOGIN_LOAD:
        // AuthenticateReducer(action=AuthenticateAction(true));
        return {
          load: action.payload
        };
      default:
        return state;
    }
}

let Reducers = combineReducers({LoadReducer,AuthenticateReducer});

export default Reducers;