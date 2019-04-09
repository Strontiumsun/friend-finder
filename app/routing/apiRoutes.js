var path = require("path");
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3307,
        user: "root",
        password: "root",
        database: "friend_finder"
    });

}


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
        var userScores = req.body.scores;
        userScores = userScores.split(",");
        console.log(userScores);


        var difference = 1000;
        var match = {};
        connection.query("SELECT * FROM profiles", function (err, data) {
            if (err) throw err;
            console.log(data);

            for (var i = 0; i < data.length; i++) {
                var dataScores = data[i].scores;
                dataScores = dataScores.split(",");
                console.log(dataScores);
                var compare = 0;
                for (var j = 0; j < userScores.length; j++) {
                    compare += Math.abs(parseInt(userScores[j]) - parseInt(dataScores[j]));
                    console.log(compare);
                }
                if (compare < difference) {
                    difference = compare;
                    match = data[i];
                }
                console.log(match)
            }
            return res.json(match);
        })

        connection.query("INSERT INTO profiles (name, photo, scores) VALUES (?,?,?)", [req.body.name, req.body.photo, req.body.scores], function (err, data) {
            if (err) throw err;
            console.log(data);
        })
    })

}

