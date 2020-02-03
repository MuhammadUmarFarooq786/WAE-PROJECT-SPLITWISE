import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';

export default class AddGroup extends Component {
  constructor(props) {
    super(props);

    this.onChangeGroupname = this.onChangeGroupname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      groupname: '',
      description: '',
      amount: 0,
      date: new Date(),
      groups: []
    }
  }

  onChangeGroupname(e) {
    this.setState({
      groupname: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const activity = {
      groupname: this.state.groupname,
      description: this.state.description,
      amount: this.state.amount,
      date: this.state.date
    }

    console.log(activity);

    axios.post('http://localhost:5000/activities/add', activity)
      .then(res => console.log(res.data));

    this.setState({
      groupname: '',
      description: '',
      amount: 0,
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h3>Add Activity</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Groups: </label>
            <select ref="friendsOptions"
              required
              className="form-control"
              value={this.state.groupname}
              onChange={this.onChangeGroupname}>
              {
                this.state.groups.map(function (group) {
                  return <option
                    key={group}
                    value={group}>{group}
                  </option>;
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Amount (Rs): </label>
            <input type="number"
              required
              className="form-control"
              value={this.state.amount}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>
          <div className="form-group">
            <input type="submit" value="Add" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}