import React, { Component } from "react";
import {Link} from "react-router-dom"

export class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="general">
              Home
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" to="health">
                  Health
                </Link>
                <Link  className="nav-link" to="sports">
                  Sports
                </Link>
                <Link  className="nav-link" to="bussiness">
                  Business
                </Link>
                <Link  className="nav-link" to="science">
                  Science
                </Link>
                <Link  className="nav-link" to="entertainment">
                  Entertainment
                </Link>
                <Link  className="nav-link" to="technology">
                  Technology
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;