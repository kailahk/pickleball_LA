const Court = require('../models/court');

module.exports = {
    index,
};

function index(req, res) {
    Court.find({}, function(err, courts) {
    res.render('courts/index', { title: 'All Courts', courts });
    });
}