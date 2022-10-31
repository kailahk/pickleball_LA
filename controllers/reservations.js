const Court = require('../models/court')
const Reservation = require('../models/reservation')

module.exports = {
    new: newReservation,
    create,
    index,
    delete: deleteReservation
}

function newReservation(req, res) {
    Court.find({}, function(err, courts) {
    res.render('reservations/new', { title: 'Add Reservation', courts });
    });
}

function create(req, res) {
    req.body.user = req.user._id
    Reservation.create(req.body, function(err) {
        console.log('error', err)
        res.redirect('/reservations/index');
    });
}

function index(req, res) {
    Reservation.find({}).populate('court').exec( function(err, reservations) {
      res.render('reservations/index', { title: 'All Reservations', reservations });
    });
}

function deleteReservation(req, res, next) {
    Reservation.findById(req.params.id)
    .then(function(reservation) {
        if (!reservation) return res.redirect('/reservations/index')
        reservation.remove(req.params.id)
        res.redirect('/reservations/index')
    }).catch (function(err) {
        return next(err);
    });
}