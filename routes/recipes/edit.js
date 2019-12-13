const express = require("express")
const app = express()
const Recipe = require("../../models/Recipe")

// In this file you have one* GET route to render the form, which we are populating with information from the database
// And one POST route to use the data that the user inputs in the form to update the document in the backend

// *Now we have two GET routes so you can see how to use both query and params

//I am not commenting out any method (params vs query), so you can try both
//PARAMS METHOD
//we identify the params with the colon
//You name the param here, the name is what you type after the colon (id in our case)
//So you will get the data from the frontend in req.params.id in this case
app.get("/edit/:id", (req, res) => {
    Recipe.find({_id: req.params.id})
    .then((result) => {
        res.render("recipes/edit.hbs", {recipe: result[0]})
    })
    .catch(err => console.log(err))
})

//QUERY METHOD
//we don't identify the query, that is done in the frontend
app.get("/edit", (req, res) => {
    Recipe.find({_id: req.query.id})
    .then((result) => {
        res.render("recipes/edit.hbs", {recipe: result[0]})
    })
    .catch(err => console.log(err))
})

app.post("/edit", (req, res) => {
    let recipeId = req.body.id
    //This is the data that the user wrote in the form to edit the recipe
    let updatedRecipe = {
        title: req.body.title,
        level: req.body.level,
        ingredients: [req.body.ingredients],
        cuisine: req.body.cuisine,
        dishType: req.body.dishType,
        image: req.body.image,
        duration: req.body.duration
    }
    Recipe.findByIdAndUpdate(recipeId, updatedRecipe, {new: true})
    .then(() => {
        //with res.redirect we are redirecting to a get route that we have created
        //we are NOT rendering a hbs file
        res.redirect("/all-recipes")
    })
    .catch(err => console.log(err))
})

module.exports = app