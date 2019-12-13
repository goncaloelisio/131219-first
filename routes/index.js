const express = require("express")
const app = express()

app.get("/", (req, res) => {
    let me = {
        firstName: "Laura",
        lastName: "Pascual"
    }
    res.render("index.hbs", {me: me})
})


module.exports = app