 import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'


class Navbar extends Component {
  render() {
    return (
      <nav
       className="navbar navbar-expand-sm   bg-dark mb-4">
        <div className="container">
          <Link  className="navbar-brand" to="/">
            Home 
          </Link> 
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Weather">
                  Weather 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SearchField">
                  Countries
                </Link>
               </li>
            </ul>
          </div>
        </div>
      </nav>
      
    );
  }
}

export default Navbar;