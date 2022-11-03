const Court = require('../models/court');

module.exports = {
  index,
  show,
}

function index(req, res) {
  Court.find({}, function (err, courts) {
    res.render('courts/index', { title: 'All Courts', courts });
  });
}

function show(req, res) {
  Court.findById(req.params.id, function (err, court) {
    res.render('courts/show', {
      title: 'Court Details',
      court
    })
  });
}