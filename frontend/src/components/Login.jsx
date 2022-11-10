import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginUser } from "../redux/Login/action.js";




export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const store  = useSelector((state) => state.login); //to store

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(loginUser({username, password}))
  }
    
  if(store.token){
      navigate("/dashboard")
  }
  return (
    <div className="logInpage">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
          <br />
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="passwrd"/>
          <br />
          <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
