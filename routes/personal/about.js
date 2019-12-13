const express = require("express")
const app = express()

app.get("/about", (req, res) => {
    //QUERY
    let firstName = req.query.firstName
    let lastName = req.query.lastName
    //I have to write the path to the file (from views) because I created two folders inside views
    //To organize it a bit
    res.render("personal/about.hbs", {firstName: firstName, lastName: lastName})
})

module.exports = app

// http://localhost:3000/about?firstName=laura&lastName=pascual