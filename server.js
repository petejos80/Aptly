var express = require('express');
var app = express();
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load();
var models = require("./models");
var exphbs = require('express-handlebars')
var authRoute = require('./app/routes/auth.js')(app);
 
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});

// Use bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // Code for session secret
app.use(passport.initialize());
app.use(passport.session()); // Code for persistent login sessions

// Use Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
 
 
app.get('/', function(req, res) {
 
    res.send('Welcome to the login page');
 
});
 
 
app.listen(5000, function(err) {
 
    if (!err)
        console.log("Login is online");
    else console.log(err)
 
});