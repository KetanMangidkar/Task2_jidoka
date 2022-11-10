import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";

import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

import "./styles/app.scss";
import "./styles/navbar.scss";
import "./styles/login.scss";
import "./styles/dashboard.scss";

function App() {
  return (
    <div className="App">
      <Navbar>navbar</Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>} ></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
