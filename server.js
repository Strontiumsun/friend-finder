var express = require('express');
var mysql = require("mysql");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root",
    database: "friend_finder"
});

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);


connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


app.listen(PORT, function () {
    console.log('App listening on PORT:' + PORT);
});