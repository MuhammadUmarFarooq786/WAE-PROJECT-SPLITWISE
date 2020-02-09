import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Activity = props => (
  <tr>
    <td>{props.activity.description}</td>
    <td>{props.activity.groupname}</td>
    <td>{props.activity.amount}</td>
    <td>{props.activity.date}</td>
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
              <th>Description</th>
              <th>Group</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            { this.activityList() }
          </tbody>
        </table>
        <div className="pull-right">
        <Link to="/add_activity" className="nav-link">Add Activity</Link>
          </div>

      </div>
    )
  }
}