const express = require("express");
const app = express();

const PORT = 5000;

app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.render("index");
});

app.listen(PORT, function () {
    console.log("Project started on started on localhost:" + PORT)
});
