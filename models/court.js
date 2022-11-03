const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
})

const courtSchema = new Schema({
  court: String,
  location: String,
  reviews: [reviewSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Court', courtSchema)
