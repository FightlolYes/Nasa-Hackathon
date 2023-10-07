const express = require("express")
const router = express.Router()

router.get("/:id", (req, res) => {
    const waypointId = req.params.id

    res.send(`You clicked on waypoint ${waypointId}`)
})

module.exports = router;