const express = require("express")
const app = express()
const Recipe = require("../models/Recipe")

app.get("/all-recipes", (req, res) => {
    Recipe.find({})
    .then((response) => {
        res.render("list", {recipes: response})
    })
    .catch(err => console.log(err))
})

module.exports = app