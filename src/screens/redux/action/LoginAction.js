import { postApiRequest } from "../ServiceManager";
import { REGISTER_SUCCESS } from "../store/Types";

export const RegisterUserAction = (url, params) => {
  return (dispatch) =>
    postApiRequest({ url, params, dispatch, actionType: REGISTER_SUCCESS });
};
