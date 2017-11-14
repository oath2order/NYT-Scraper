import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          NYT-React
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/search"
              ? "active"
              : ""
          }
        >
          <Link to="/">Search</Link>
        </li>
        <li className={window.location.pathname === "/saved" ? "active" : ""}>
          <Link to="/saved">Saved Articles</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
