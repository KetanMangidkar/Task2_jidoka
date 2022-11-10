import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router"


export const Register = () => {
    // const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [mobile, setMobile] = useState("");
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

    const store = useSelector((state) => state.register)
    console.log(store);


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submited");
    }

    if(store.isAuth){
        navigate("/login")
    }
  return (
    <div className="registerPage">
      <h1>Register page</h1>
      <form onSubmit={handleSubmit} className="table">
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <br />
        <input
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <br />
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <br />
        <input
          value={username}
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter user name"
        />
        <br />
        <input
          value={mobile}
          type="text"
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter mobile number"
        />
        <br />
        <input
          value={description}
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
        <br />
        <input type="submit" placeholder="submit" />
      </form>
    </div>
  );
};

export default Register;
