const express = require("express")
const hbs = require("hbs")


const app = express()

app.set('view engine', 'hbs');
app.set("views", __dirname + "views");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static(__dirname + "public"));

// let indexRouter = require("./routes/index.js")
// app.use("/", indexRouter)
app.use("/", require("./routes/index.js"))
app.use("/person", require("./routes/contact.js"))
app.use("/", require("./routes/about.js"))


app.listen(3000, () => {
    console.log("listening!")
})

