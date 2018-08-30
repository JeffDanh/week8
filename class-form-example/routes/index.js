var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    var data = req.app.get('appData');
    var pagePhotos = [];
    var pageDogs = data.dogs;

    data.dogs.forEach(function(item){
        pagePhotos = pagePhotos.concat(item.artwork);
    });

    res.render('index', {
        pageTitle: 'Home',
        artwork: pagePhotos,
        dogs: pageDogs,
        pageID: 'home'
    });
})

