const router = require('express').Router();
let Activity = require('../models/activity.model');

router.route('/').get((req, res) => {
  Activity.find()
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const activity = req.body;
  const newActivity= new Activity({groupname:activity.groupname,description:activity.description,amount:activity.amount,date:activity.date});

  newActivity.save()
    .then(() => res.json('Activity added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;