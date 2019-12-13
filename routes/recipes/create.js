const express = require("express")
const app = express()
const Recipe = require("../../models/Recipe")

// In this file you have one GET route to render the form to create a Recipe
// And one POST route to create the recipe in the database, with the information from the form

app.get("/create", (req, res) => {
    //We don't need to pre populate the form, it can be blank
    //So the only thing we need to do here is render the view where we have the form
    res.render("recipes/create.hbs")
})

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
        //with res.redirect we are redirecting to a get route that we have created
        //we are NOT rendering a hbs file
        res.redirect("/all-recipes")
    })
    .catch(err => console.log(err))
})


module.exports = app