var express = require('express');
var app = express();

app.get('/', function(request, response, next){
    request.message = "hello";
    response.send('Hello World');
    next();
},
(request, response, next) =>{
    request.message += " Eric";
    next();
},
(request, response) =>{
    response.send(request.message);
}

)



app.get('/Matt', function(req, res){
    res.send("Hello Matt");
})

app.listen(8000, function() {
    console.log('running on port 8000');
});