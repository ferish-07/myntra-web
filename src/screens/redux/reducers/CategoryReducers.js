import {
  ADD_MAIN_CATEGORY,
  ADD_SECTION_RESPONSE,
  ADD_SUB_SECTION_RESPONSE,
  ALL_SECTION,
  RESET,
} from "../store/Types";

const INITIAL_STATE = {
  addMainCategoryData: null,
  allSectionData: null,
  addSectionResponse: null,
  addSubSectionResponse: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MAIN_CATEGORY:
      return {
        ...state,
        addMainCategoryData: action?.payload?.data,
      };
    case ALL_SECTION:
      return {
        ...state,
        allSectionData: action?.payload?.data,
      };
    case ADD_SECTION_RESPONSE:
      return {
        ...state,
        addSectionResponse: action?.payload?.data,
      };
    case ADD_SUB_SECTION_RESPONSE:
      return {
        ...state,
        addSubSectionResponse: action?.payload?.data,
      };
    case RESET: {
      switch (action.payload) {
        case ADD_MAIN_CATEGORY:
          return {
            ...state,
            addMainCategoryData: null,
          };
        case ALL_SECTION:
          return {
            ...state,
            allSectionData: null,
          };
      }
    }
    default:
      return state;
  }
};
