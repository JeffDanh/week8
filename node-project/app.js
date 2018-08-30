let express = require('express');
let app = express();
let data = require('./data/data.json');
var bodyParser = require('body-parser');

app.set('appData', data);

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('appData', data);

app.locals.siteTitle = "Dogs";

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json())

app.use(require('./index'));

app.use(require('./dogs'));

app.use(require('./routes/api'));

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})