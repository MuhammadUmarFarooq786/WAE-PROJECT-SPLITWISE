import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Activity = props => (
  <tr>
    <td>{props.activity.name}</td>
    <td>{props.activity.group}</td>
    <td>{props.activity.balance}</td>
  </tr>
)

export default class ActivitiesList extends Component {
  constructor(props) {
    super(props);

    this.state = {activities: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/activities/')
      .then(response => {
        this.setState({ activities: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  activityList() {
    return this.state.activities.map(currentActivity => {
      return <Activity activity={currentActivity} key={currentActivity._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Activities</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Activity Description</th>
              <th>Group</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            { this.activityList() }
          </tbody>
        </table>
      </div>
    )
  }
}