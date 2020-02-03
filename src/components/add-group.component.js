import React, { Component } from 'react';
import axios from 'axios';

export default class AddGroup extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.
      onSubmit.bind(this);

    this.state = {
      name: '',
      friends: []
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const group = {
      name: this.state.name,
      friends: this.state.friends.map(friend => friend.isSelected)
    }

    console.log(group);

    axios.post('http://localhost:5000/groups/add', group)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      friends:[]
    })
  }

  render() {
    return (
      <div>
        <h3>Add Group</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />            
          </div>
          <div className="form-group"> 
          <label>Friends: </label>
          <select ref="friendsOptions"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.friends.map(function(friend) {
                  return <option 
                    key={friend}
                    value={friend}>{friend}
                    </option>;
                })
              }
          </select>
        </div>
          <div className="form-group">
            <input type="submit" value="Add" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}