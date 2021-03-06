const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    groupname: { type: String, required: true },
    description: { type: String, required: true },
    amount: {type: Number, required:true},
    date: {type: Date, required: true}
}, {
  timestamps: true,
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;