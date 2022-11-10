import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/dashboard">
          <h3>Dashboard</h3>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <h3>Login</h3>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
