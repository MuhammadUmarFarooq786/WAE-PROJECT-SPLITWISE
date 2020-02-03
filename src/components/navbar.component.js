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
          <li className="navbar-item">
          <Link to="/add_friend" className="nav-link">Add Friend</Link>
          </li>
          <li className="navbar-item">
          <Link to="/add_group" className="nav-link">Add Group</Link>
          </li>
          <li className="navbar-item">
          <Link to="/add_activity" className="nav-link">Add Activity</Link>
          </li>
          <li className="navbar-item">
          <Link to="/exercises" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}