const express = require("express")
const router = express.Router()
const Ocean = require("../../models/Ocean")


router.get("/:name", async (req, res) => {
    const name = req.params.name

    const ocean = await Ocean.findOne({name: name})
    const description = ocean.description
    const surface_area = ocean.Surface_area
    const Avg_Depth = ocean.Avg_Depth
    const Max_Depth = ocean.Max_Depth
    const Max_Depth_Location = ocean.Max_Depth_Location
    const Avg_temperature = ocean.Avg_temperature
    const species = ocean.species

    res.render("oceans", {name, description:description, surface_area, Avg_Depth, Max_Depth, Max_Depth_Location, Avg_temperature, species})
})

module.exports = router;