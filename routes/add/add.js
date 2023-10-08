const express = require("express")
const router = express.Router()
const Ocean = require("../../models/Ocean")


router.get("/", async (req, res) => {
    res.render("add/ocean")
})

router.post("/", async (req, res) => {
    try {
        const newOcean = new Ocean({
            name: req.body.name,
            Surface_area: req.body.Surface_area,
            Avg_Depth: req.body.Avg_Depth,
            Max_Depth: req.body.Max_Depth,
            Max_Depth_Location: req.body.Max_Depth_Location,
            Avg_temperature: req.body.Avg_temperature,
            coordinates: req.body.coordinates.split(',').map(parseFloat),
            description: req.body.description,
            species: [], 
        })

        await newOcean.save()

        res.redirect(`/waypoint/${req.body.name}`)
    } catch(error) {
        console.error(error)
    }
})

router.get("/:ocean/add", async (req, res) => {
    const ocean = req.params.ocean
    res.render("add/specie", {ocean})
})

router.post("/:ocean/add", async (req, res) => {
    try {
        const ocean = await Ocean.findOne({name: req.params.ocean});
        if (!ocean) {
          return res.status(404).send('Ocean not found');
        }
    
        const newSpecies = {
            Name: req.body.Name,
            Scientific_name: req.body.Scientific_name,
            description: req.body.description,
            weight: req.body.weight,
            length: req.body.length,
            lifespan: req.body.lifespan,
            threats: req.body.threats,
            region: req.body.region,
            population_status: req.body.population_status,
        }
      
        ocean.species.push(newSpecies);
      
        await ocean.save();

    
        res.redirect('/')
      } catch (error) {
        console.error(error);
        res.status(500).send('Error adding species')
      }
})

module.exports = router;