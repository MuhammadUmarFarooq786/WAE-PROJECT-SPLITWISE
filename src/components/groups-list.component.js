import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Group = props => (
  <tr>
    <td>{props.group.name}</td>
    {/* Comma separated friend names */}
    <td>{props.group.friends.map(friend => friend+',  ')}</td>      
    <td>{props.group.balance}</td>
  </tr>
)

export default class GroupsList extends Component {
  constructor(props) {
    super(props);

    this.state = {groups: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/groups/')
      .then(response => {
        this.setState({ groups: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  groupList() {
    return this.state.groups.map(currentGroup => {
      return <Group group={currentGroup} key={currentGroup._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Groups</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Friends</th>            
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            { this.groupList() }
          </tbody>
        </table>
      </div>
    )
  }
}