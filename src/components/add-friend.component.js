import React, { Component } from 'react';
import axios from 'axios';

export default class AddFriend extends Component {
  constructor(props) {
    super(props);

    this.onChangename = this.onChangename.bind(this);
    this.onSubmit = this.
      onSubmit.bind(this);

    this.state = {
      id: 0,
      name: ''
    }
  }

  onChangename(e) {
    this.setState({
      name: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const friend = {
      name: this.state.name
    }

    console.log(friend);

    axios.post('http://localhost:5000/friends/add', friend)
      .then(res => console.log(res.data));

    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Add Friend</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>name: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangename}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Add" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}