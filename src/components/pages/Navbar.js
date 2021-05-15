import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <Link className="navbar-brand" to="/">
        <img src={Logo} style={{ height: 40 }} alt="Logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/todos">
              Todos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
