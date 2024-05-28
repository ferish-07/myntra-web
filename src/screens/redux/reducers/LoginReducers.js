import { REGISTER_SUCCESS } from "../store/Types";

const INITIAL_STATE = {
  registerUser: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS: {
      return {
        ...state,
        registerUser: action.payload.data,
      };
    }
    default:
      return state;
  }
};
