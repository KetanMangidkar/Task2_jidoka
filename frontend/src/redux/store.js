import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { registerReducer } from "./Register/reducer";
import { loginReducer } from "./Login/reducer";



const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)

);

console.log(store.getState());
