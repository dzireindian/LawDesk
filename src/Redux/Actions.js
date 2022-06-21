import { LOGIN_LOAD } from "./Consts";

export const LoginLoadAction = (value) =>{
    return {
    type: LOGIN_LOAD,
    payload: value
  };
}