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

app.get("/api/friends", function (req, res) {
    connection.query("SELECT * FROM profiles", function (err, data) {
        if (err) throw err;
        console.log(data);
        return res.json(data);

    })
})

app.post("/api/friends", function (req, res) {
    // this needs to take data probably from a button of sorts.
})


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