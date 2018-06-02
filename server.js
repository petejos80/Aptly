var express = require('express')
var app = express()
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load()
var exphbs = require('express-handlebars')
 
// For BodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
 
 
// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(express.static('public'))
 
// For Handlebars
// app.set('views', './views')
app.engine('hbs', exphbs({
    extname: '.hbs', 
    defaultLayout: 'main', 
    partialsPath: 'partials'
}));
app.set('view engine', '.hbs');
 
 
 
app.get('/', function(req, res) {
 
    res.render('dashboard');
 
});
 
//Models
var models = require("./models");
console.log('models', models.User)
 
//Routes
var authRoute = require('./app/routes/auth.js')(app,passport);
 
console.log('modelsuser', models.user)
//Load passport strategies
require('./config/passport/passport.js')(passport, models.User);
 
 
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});
 
 
app.listen(5000, function(err) {
 
    if (!err)
 
        console.log("Site is live");
         
    else console.log(err)
 
}); 
