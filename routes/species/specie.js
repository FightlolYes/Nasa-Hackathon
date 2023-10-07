const express = require("express")
const router = express.Router()
const Ocean = require("../../models/Ocean")


router.get("/:specie", async (req, res) => {
    const name = req.params.specie

    res.render("specie", {name, description: "Something"})
})

module.exports = router;