const express = require("express");
var bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const axios = require("axios");
const { v4: uuidv4 } = require('uuid');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// parse application/json
app.use(bodyParser.json());

const connection = require("./app/database/databaseConfig.js");

//resources
app.use(express.static(__dirname + "/resources"));
app.use("/css", express.static(path.join(__dirname, "resources/css")));

//jquerty
app.use(express.static(path.join(__dirname, "node_modules/jquery/dist/")));

app.use("/js", express.static(path.join(__dirname, "resources/js")));
app.use("/js", express.static(path.join(__dirname, "resources/mainView")));
app.use("/js",express.static(path.join(__dirname, "resources/vendor/MDB-Free_4.19.2/js")));
app.use("/js", express.static(path.join(__dirname,"resources/vendor/jquery-ui-1.12.1.custom/jquery-ui-1.12.1.custom/")));

//set assests of my template
app.use("/myTemplate",express.static(path.join(__dirname, "./app/views/myTemplate")));
app.use("/js", express.static(path.join(__dirname, "./app/views/myTemplate")));
app.use("/css", express.static(path.join(__dirname, "./app/views/myTemplate")));
app.use("/img", express.static(path.join(__dirname, "./app/views/myTemplate")));
app.use("/img", express.static(path.join(__dirname, "resources/img")));

require("./app/routes/route")(app);

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

//setting up views engine
app.use(expressLayouts);
app.set("views", path.join(__dirname, "/app/views"));
// set the view engine to ejs
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost/:${PORT}`);

});