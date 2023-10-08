const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

const url = "mongodb+srv://yashpatil:Yash232107@hackathon.syilzc3.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Successfully connected to DB (Home)")
    })
    .catch((error) => {
        console.log("Error connecting to DB (Home)", error)
})

app.get('/', (req, res) => {
    res.render("home")
})

app.get('/prevention', (req, res) => {
    res.render("prevention")
})

app.get('/donate', (req, res) => {
    res.render("donate")
})

app.get('/spiral', (req, res) => {
    res.render("spiral")
})

app.get("/about", (req, res) => {
    res.render("about")
})

apiRoute = require("./routes/api/api")
app.use("/api", apiRoute)

waypointRoute = require("./routes/waypoint/waypoint")
app.use("/waypoint", waypointRoute)

addRoute = require("./routes/add/add")
app.use("/add", addRoute)

app.listen(3000, function() {
    console.log("Server started on port 3000");
})
  