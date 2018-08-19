let express = require('express');
let app = express();

var http = require('http').Server(app);

var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('building chat');
})

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });

});

http.listen(3000, function(){
    console.log('listening on port 3000');
})

