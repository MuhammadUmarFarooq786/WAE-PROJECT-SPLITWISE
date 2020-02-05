const router = require('express').Router();
let Friend = require('../models/friend.model');

router.route('/').get((req, res) => {
  Friend.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;

  const newFriend = new Friend({name});

  newFriend.save()
    .then(() => res.json('Friend added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Friend.findById(req.params.id)
    .then(friend => res.json(friend))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Friend.findById(req.params.id)
    .then(friend => {
      friend.amount = friend.amount+req.body.amount;

      friend.save()
        .then(() => res.json('Friend Expenses updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;