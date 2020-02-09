import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Friend = props => (
  <tr>
    <td>{props.friend.name}</td>
    <td>{props.friend.balance}</td>
  </tr>
)

export default class FriendsList extends Component {
  constructor(props) {
    super(props);

    this.state = {friends: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends/')
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  friendList() {
    return this.state.friends.map(currentFriend => {
      return <Friend friend={currentFriend} key={currentFriend._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Friends</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            { this.friendList() }
          </tbody>
        </table>
        <div className="pull-right">
        <Link to="/add_friend" className="nav-link">Add Friend</Link>
        <FontAwesomeIcon icon="add" />
          </div>
      </div>
    )
  }
}