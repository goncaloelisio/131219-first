const express = require("express")
const app = express()

app.get("/", (req, res) => {
    //later on you will get this data from the DB
    let me = {
        firstName: "Laura",
        lastName: "Pascual"
    }
    res.render("index.hbs", {me: me})
})


module.exports = app