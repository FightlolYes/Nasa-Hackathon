const express = require("express")

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render("home")
})

app.get("/waypoint/:id", (req, res) => {
    const waypointId = req.params.id

    res.send(`You clicked on waypoint ${waypointId}`)
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
})
  