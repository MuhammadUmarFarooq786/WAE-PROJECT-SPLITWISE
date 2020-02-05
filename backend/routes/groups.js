const router = require('express').Router();
let Group = require('../models/group.model');

router.route('/').get((req, res) => {
  Group.find()
    .then(groups => res.json(groups))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const group = req.body;
  const newGroup= new Group({name:group.name,friends:group.friends});

  newGroup.save()
    .then(() => res.json('Group added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;