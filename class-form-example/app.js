var express = require('express');
var app = express();
var data = require('./data/data.json');

app.set('view engine', 'ejs');
app.set('appData', data);

app.locals.siteTitle = "Doggies";

app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/dogs'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));

app.listen(3000, ()=> {
    console.log('Listening on port 3000');
})
