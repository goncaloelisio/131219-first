const express = require("express")
const app = express()

app.get("/search", (req, res) => {
    let searchResults = req.query["search-string"]
    //you'd search in your database with the query you got
    //then send THOSE results to the front-end
    res.render("personal/searchResults.hbs", {searchResults: searchResults})
})

module.exports = app