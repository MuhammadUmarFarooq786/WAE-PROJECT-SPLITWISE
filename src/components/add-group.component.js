import React, { Component } from 'react';
import axios from 'axios';
import { Multiselect } from 'multiselect-react-dropdown';

export default class AddGroup extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.
      onSubmit.bind(this);

      this.multiselectRef = React.createRef();

    this.state = {
      name: '',
      friends: [{ name: 'Ali'}, { name: 'Usman'}, { name: 'Adeel' }, { name: 'Ihrar' }],
      selectedValue:[]
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            friends: response.data.map(friend => {
              return {name:friend.name, id:friend._id};
            })
          })
          // let check=this.state.friends;
        }
      })
      .catch((error) => {
        console.log(error);
      })

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
      friends: this.multiselectRef.current.getSelectedItems().map(friend => friend.name)
    }
    console.log(group);

    axios.post('http://localhost:5000/groups/add', group)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      friends: []
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
            {/* <select ref="friendsOptions"
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
          </select> */}
            <Multiselect
              options={this.state.friends} // Options to display in the dropdown
              selectedvalues={this.state.selectedValue} // Preselected value to persist in dropdown
              // onSelect={this.onSelect} // Function will trigger on select event
              // onRemove={this.onRemove} // Function will trigger on remove event
              displayValue="name" // Property name to display in the dropdown options
              ref={this.multiselectRef}
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