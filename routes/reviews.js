const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes "starts with" / (root)

// POST /movies/:id/reviews
router.post('/courts/:id/reviews', ensureLoggedIn, reviewsCtrl.create);
// DELETE /reviews/:id
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);

module.exports = router;