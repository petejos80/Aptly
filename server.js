//Dependencies for Server

let express = require ("express");
let bodyParser = require("body-parser");

//Sets up the express app

let app = express();
let PORT = process.argv.PORT || 8080;

let db = require("./models");



// data parsing by express
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//static delivery
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


// Sync Database

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
