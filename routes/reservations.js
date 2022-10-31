const express = require('express');
const router = express.Router();
const reservationsCtrl = require('../controllers/reservations');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /reservations
router.get('/reservations/index', ensureLoggedIn, reservationsCtrl.index);
// GET /reservations/new
router.get('/reservations/new', ensureLoggedIn, reservationsCtrl.new);
// POST /reservations
router.post('/reservations', ensureLoggedIn, reservationsCtrl.create);
// DELETE /reservations/:id
router.delete('/reservations/:id', ensureLoggedIn, reservationsCtrl.delete);

module.exports = router;