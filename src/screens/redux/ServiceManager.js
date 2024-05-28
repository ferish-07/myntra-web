import axios from "axios";

// headers={
//     headers: { token: JSON.parse(localStorage.getItem("token")) },
//   }
export const getApiRequest = ({ url, params, dispatch, actionType }) => {
  return axios
    .get(url)
    .then((response) => {
      dispatch({ type: actionType, payload: response });
    })
    .catch((err) => {
      dispatch({ type: actionType, payload: err.response });
    });
};

export const postApiRequest = ({ url, params, dispatch, actionType }) => {
  //   axios.post(url);
  return axios
    .post(url, params)
    .then((response) => {
      dispatch({ type: actionType, payload: response });
    })
    .catch((err) => {
      dispatch({ type: actionType, payload: err.response });
    });
};
