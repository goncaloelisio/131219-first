const express = require("express")
const hbs = require("hbs")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")

const app = express()

let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect("mongodb://localhost:27017/restaurant", options, (err, connectionInfo) => {
    if(err) console.log(err);
    else console.log("connected to database")
})

//look up
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'hbs');
app.set("views", __dirname + "views");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static(__dirname + "public"));

// let indexRouter = require("./routes/index.js")
// app.use("/", indexRouter)
app.use("/", require("./routes/index.js"))
app.use("/person", require("./routes/contact.js"))
app.use("/", require("./routes/about.js"))
app.use("/", require("./routes/search"))
app.use("/", require("./routes/create"))
app.use("/", require("./routes/list"))


app.listen(3000, () => {
    console.log("listening!")
})

