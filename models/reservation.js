const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Court = require('./court')

const reservationSchema = new Schema({
    court: {
        type: Schema.Types.ObjectId,
        ref: 'Court'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: function() {
            let dateCreated = new Date().getFullYear().getMonth().getDate();
            return dateCreated++;
        }
    },
    time: {
        type: String,
        enum: ['9:00am - 10:30am PT', '10:30am - 12:00pm PT', '12:00pm - 1:30pm PT', '1:30pm - 3:00pm PT', '3:00pm - 4:30pm PT', '4:30pm - 6:00pm PT']
    }
    }, {
      timestamps: true
})

module.exports = mongoose.model('Reservation', reservationSchema);