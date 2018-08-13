// Express Exercises

var express = require('express');
var app = express();

app.get('/', function(request, response, next){
    request.message = "hello";
    response.send('Hello, world!');
    next();
}
)
app.get('/cats', function(req, res){
    res.send("Meow");
})
app.get('/dogs', function(req, res){
    res.send('Woof');
})
app.get('/cats_and_dogs', function(req, res){
    res.send('Living together');
})

app.get('/greet', function(req, res){
    var name = req.param('name');
    res.send('Hello, ' + name);
})

app.get('/year', function(req, res){
    var age = req.param('age');
    year = 2018 - age;
    res.send('You were born in ' + year + '.')
})

app.listen(8000, function() {
    console.log('running on port 8000');
});