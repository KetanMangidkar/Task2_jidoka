import axios from "axios";

/// Action Creators

export const actions = {
  REGISTER_REQUEST: "REGISTER_REQUEST",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAILURE: "REGISTER_FAILURE",
};

export const registerRequest = () => {
  return {
    type: actions.REGISTER_REQUEST,
  };
};
export const registerSuccess = (data) => {
  return {
    type: actions.REGISTER_SUCCESS,
    payload: data,
  };
};

export const registerFailure = (err) => {
  return {
    type: actions.REGISTER_FAILURE,
    payload: err,
  };
};

export const registerUser = (payload) => (dispatch) => {
  // console.log(payload, "payload");

  const { name, email, password, username, mobile, description } = payload;
  const requestAction = registerRequest();
  dispatch(requestAction);

  axios({
    url: "https://masai-api-mocker.herokuapp.com/auth/register",
    method: "POST",
    data: {
      name,
      email,
      password,
      username,
      mobile,
      description,
    },
  })
    .then((res) => {
      console.log(res, "res");
      alert("Register Successfully");
      const successAction = registerSuccess();
      dispatch(successAction);
    })
    .catch((err) => {
      console.log(err, "err");
      const errorAction = registerFailure(err);
      dispatch(errorAction);
    });
};