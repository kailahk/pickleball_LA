const Court = require('../models/court')
const Reservation = require('../models/reservation')

module.exports = {
  new: newReservation,
  create,
  index,
  delete: deleteReservation
}

function newReservation(req, res) {
  Court.find({}, function (err, courts) {
    const validInputs = Reservation.schema.path('time').enumValues;
    console.log(validInputs);
    res.render('reservations/new', { title: 'Add Reservation', courts, validInputs });
  });
}

function create(req, res) {
  req.body.user = req.user._id
  Reservation.create(req.body, function (err) {
    res.redirect('/reservations/index');
  });
}

function index(req, res) {
  Reservation.find({ user: req.user._id }).populate('court').exec(function (err, reservations) {
    res.render('reservations/index', { title: 'All Reservations', reservations });
  });
}

function deleteReservation(req, res, next) {
  Reservation.findOneAndDelete(
    { _id: req.params.id, user: req.user._id }
  ).then(function () {
    res.redirect('/reservations/index')
  }).catch(function (err) {
    return next(err);
  });
}