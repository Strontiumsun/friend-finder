var path = require("path");

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
    })



}

