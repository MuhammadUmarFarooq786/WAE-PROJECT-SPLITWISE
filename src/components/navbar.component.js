import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Splitwise</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/" className="nav-link">Friends</Link>
          </li>
          <li className="navbar-item">
          <Link to="/groups" className="nav-link">Groups</Link>
          </li>
          <li className="navbar-item">
          <Link to="/activities" className="nav-link">Activities</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}