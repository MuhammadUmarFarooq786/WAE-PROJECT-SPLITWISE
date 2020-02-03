import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import FriendsList from "./components/friends-list.component";
import GroupsList from "./components/groups-list.component";
import ActivitiesList from "./components/activities-list.component";
import AddFriend from "./components/add-friend.component";
import AddGroup from "./components/add-group.component";
import AddActivity from "./components/add-activity.component";

// make a repo and push the code to keep a track during dev
function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={FriendsList} />
      <Route path="/groups" exact component={GroupsList} />
      <Route path="/activities" exact component={ActivitiesList} />
      <Route path="/add_friend" exact component={AddFriend} />
      <Route path="/add_group" exact component={AddGroup} />
      <Route path="/add_activity" exact component={AddActivity} />
      <Route path="/exercises" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
