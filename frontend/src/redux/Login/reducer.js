import { actions } from "./action";

const initState = {
  isLogin: false,
  token: "",
  isLoading: true,
  isError: false,
};

export const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actions.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: true,
        token: action.payload,
      };
    }
    case actions.LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
