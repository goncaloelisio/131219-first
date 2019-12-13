const express = require("express")
const app = express()
const Recipe = require("../models/Recipe")

app.post("/create", (req, res) => {
    let newRecipe = {
        title: req.body.title,
        level: req.body.level,
        ingredients: [req.body.ingredients],
        cuisine: req.body.cuisine,
        dishType: req.body.dishType,
        image: req.body.image,
        duration: req.body.duration
    }

    // object destructuring
    // const { name, level, ingredients, cuisine, dishType, image, duration } = req.body

    Recipe.create(newRecipe)
    .then(() => {
        res.redirect("/all-recipes")
    })
    .catch(err => console.log(err))
})


module.exports = app