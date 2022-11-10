import axios from "axios";

export const actions = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
};

export const loginRequest = () => {
  return {
    type: actions.LOGIN_REQUEST,
  };
};

export const loginSuccess = (data) => {
  return {
    type: actions.LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFailure = (err) => {
  return {
    type: actions.LOGIN_FAILURE,
    payload: err,
  };
};

export const loginUser = (payload) => (dispatch) => {
  const { username, password } = payload;
  const requestAction = loginRequest();
  dispatch(requestAction);
  axios({
    url: "https://masai-api-mocker.herokuapp.com/auth/login",
    method: "POST",
    data: {
      password,
      username,
    },
  })
    .then((res) => {
      alert(`LOGIN SUCCESS` );
      const successAction = loginSuccess(res.data.token);
      dispatch(successAction);
    })
    .catch((err) => {
      const errorAction = loginFailure(err);
      dispatch(errorAction);
      // alert("Unauth Access")
    });
};