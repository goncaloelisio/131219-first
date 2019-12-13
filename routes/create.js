const express = require("express")
const app = express()

app.post("/create", (req, res) => {
    //you will mongoose to create a new object
    //with the data from req.body
    res.send(req.body)
})


module.exports = app