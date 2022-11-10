import { actions } from "./action";

const initState = {
  isAuth: false,
  isLoading: true,
  isError: false,
  message: "", //str
};

export const registerReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.REGISTER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.REGISTER_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        message: action.payload,
      };
    }
    case actions.REGISTER_FAILURE: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    default:
      return state;
  }
};
