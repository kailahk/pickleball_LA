const express = require('express');
const router = express.Router();
const courtsCtrl = require('../controllers/courts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/courts'

router.get('/', ensureLoggedIn, courtsCtrl.index);
// GET /courts/:id
router.get('/:id', ensureLoggedIn, courtsCtrl.show);

module.exports = router;
