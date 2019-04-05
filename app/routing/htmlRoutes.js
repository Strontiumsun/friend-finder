var path = require("path");

module.exports = function (app) {

    app.get("/survey", function (req, res) {
        // res.send("Survey page");
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    app.get("/", function (req, res) {
        // res.send("Home page");
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })

    app.get("*", function (req, res) {
        // res.send("Will move you to home page");
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })

}

