const express = require("express")
const app = express()

app.get("/about", (req, res) => {
    //QUERY
    debugger
    let firstName = req.query.firstName
    let lastName = req.query.lastName
    res.render("about.hbs", {firstName, lastName})
})

module.exports = app

// http://localhost:3000/about?firstName=laura&lastName=pascual