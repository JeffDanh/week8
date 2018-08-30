var express = require('express');
var router = express.Router();

router.get('/dogs', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageDogs = data.dogs;

  data.speakers.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('dogs', {
    pageTitle: 'Dogs',
    artwork: pagePhotos,
    dogs: pageDogs,
    pageID: 'dogList'
  });
});

router.get('/dogs/:dogid', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageDogs = [];

  data.dogs.forEach(function(item) {
    if (item.shortname == req.params.dogid) {
      pageDogs.push(item);
      pagePhotos = pagePhotos.concat(item.artwork);
    }
  });

  res.render('dogs', {
    pageTitle: 'Dog Info',
    artwork: pagePhotos,
    dogs: pageDogs,
    pageID: 'dogDetail'
  });
});

module.exports = router;