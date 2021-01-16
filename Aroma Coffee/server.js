var express = require ("express")
var app = express()
var path = require("path")
var exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

function onHttpStart() {
    console.log('Express http server listening on: ' + HTTP_PORT)
}






//engine
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main'
}));

app.set('view engine', '.hbs');

var HTTP_PORT= process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '/public')))

app.listen(HTTP_PORT, onHttpStart);

//routes
app.use('/', require('./routes/index'))