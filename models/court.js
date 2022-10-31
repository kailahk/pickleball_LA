const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courtSchema = new Schema({
    court: String,
    location: String
})

module.exports = mongoose.model('Court', courtSchema)