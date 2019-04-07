var path = require("path");
var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root",
    database: "friend_finder"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});



module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        connection.query("SELECT * FROM profiles", function (err, data) {
            if (err) throw err;
            console.log(data);
            return res.json(data);

        })
    })

    app.post("/api/friends", function (req, res) {
        // this needs to take data probably from a button of sorts.
        // see reservations from Hot Restaurant
        console.log(req.body);
        // query the database to get all the users here
        // then do the comparison loop
        // push the closest match to the front end
        // after we do this:
        connection.query("INSERT INTO profiles (name, photo, scores) VALUES (?,?,?)", [req.body.name, req.body.photo, req.body.scores], function (err, data) {
            if (err) throw err;
            console.log(data);
            return res.json(data);
        })
    })



}

