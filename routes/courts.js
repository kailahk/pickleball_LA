const express = require('express');
const router = express.Router();
const courtsCtrl = require('../controllers/courts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/courts'

/* GET users listing. */
router.get('/', ensureLoggedIn, courtsCtrl.index);

module.exports = router;
