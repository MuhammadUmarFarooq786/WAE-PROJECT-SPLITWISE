const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_ATLAS;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const friendsRouter = require('./routes/friends');
const groupsRouter = require('./routes/groups');
const activitiesRouter = require('./routes/activities');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/friends', friendsRouter);
app.use('/groups', groupsRouter);
app.use('/activities', activitiesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
