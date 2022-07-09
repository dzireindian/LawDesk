import { LOGIN_LOAD,AUTHENTICATE } from "./Consts";

export const LoginLoadAction = (value) =>{
    return {
    type: LOGIN_LOAD,
    payload: value
  };
}

export const AuthenticateAction = (value) =>{
  return {
  type: AUTHENTICATE,
  payload: value
  };
}