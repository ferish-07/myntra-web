import { getApiRequest, postApiRequest } from "../ServiceManager";
import {
  ADD_MAIN_CATEGORY,
  ADD_SECTION_RESPONSE,
  ADD_SUB_SECTION_RESPONSE,
  ALL_SECTION,
  RESET,
} from "../store/Types";

export const mainCategoryAction = (url, params) => {
  return (dispatch) =>
    postApiRequest({ url, params, dispatch, actionType: ADD_MAIN_CATEGORY });
};
export const getAllSectionDataAction = (url) => {
  return (dispatch) =>
    getApiRequest({ url, dispatch, actionType: ALL_SECTION });
};

export const AddSectionAction = (url, params) => {
  return (dispatch) =>
    postApiRequest({ url, params, dispatch, actionType: ADD_SECTION_RESPONSE });
};
export const AddSubSectionAction = (url, params) => {
  return (dispatch) =>
    postApiRequest({
      url,
      params,
      dispatch,
      actionType: ADD_SUB_SECTION_RESPONSE,
    });
};

export const resetAction = (type = "NORMAL") => {
  return (dispatch) => dispatch({ type: RESET, payload: type });
};
