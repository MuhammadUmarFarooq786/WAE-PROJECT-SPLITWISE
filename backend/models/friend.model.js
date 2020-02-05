const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const friendSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  balance: {
    type: Number,
    required: false,
    default: 0
  }
}, {
  timestamps: true,
});

const Friend = mongoose.model('Friend', friendSchema);

module.exports = Friend;