const express = require("express")
const app = express()
const Recipe = require("../../models/Recipe")

app.get("/all-recipes", (req, res) => {
    //We use an empty object if we want to retrieve the full collection
    Recipe.find({})
    .then((response) => {
        res.render("recipes/list.hbs", {recipes: response})
    })
    .catch(err => console.log(err))
})

module.exports = app