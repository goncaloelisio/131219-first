const express = require("express")
const app = express()

app.get("/:firstName", (req, res) => {
    //PARAMS
    debugger
    let myName = req.params.firstName
    res.render("contact.hbs", {firstName: myName})
})


module.exports = app

// http://localhost:3000/person/laura