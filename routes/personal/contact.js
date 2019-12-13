const express = require("express")
const app = express()

app.get("/:firstName", (req, res) => {
    //PARAMS
    let myName = req.params.firstName
    res.render("personal/contact.hbs", {firstName: myName})
})


module.exports = app

// http://localhost:3000/person/laura