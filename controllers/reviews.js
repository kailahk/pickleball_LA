const Court = require('../models/court');

module.exports = {
    create,
    delete: deleteReview,
    edit,
    update
  };

function create(req, res) {
    Court.findById(req.params.id, function(err, court) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;

        court.reviews.push(req.body);
        court.save(function(err) {
            res.redirect(`/courts/${court._id}`)
        });
    });
}

function deleteReview(req, res, next) {
    Court.findOne({
      'reviews._id': req.params.id,
      'reviews.user': req.user._id
    }).then(function(court) {
      if (!court) return res.redirect('/courts');
      court.reviews.remove(req.params.id);
      court.save().then(function() {
        res.redirect(`/courts/${court._id}`);
      }).catch(function(err) {
        return next(err);
      });
    });
  }

function edit(req, res) {
Court.findOne({'reviews._id': req.params.id}, function(err, court) {
    const review = court.reviews.id(req.params.id);
    res.render('reviews/edit', {title: 'Edit Review', review, court});
});
}

function update(req, res) {
    Court.findOne({'reviews._id': req.params.id}, function(err, court) {
      const reviewSubDoc = court.reviews.id(req.params.id);
      if (!reviewSubDoc.user.equals(req.user._id)) return res.redirect(`/courts/${court._id}`);
      reviewSubDoc.content = req.body.content;
      court.save(function(err) {
        res.redirect(`/courts/${court._id}`);
      });
    });
  }