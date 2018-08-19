let express = require('express');
let app = express();
let data = require('./data.json');

app.set('appData', data);

app.use(express.static('public'));

app.use(require('./index'));

app.use(require('./dogs'));

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})