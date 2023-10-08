const express = require("express")
const router = express.Router()
const Ocean = require("../../models/Ocean")


router.get("/:name", async (req, res) => {
    try {
      const name = req.params.name;
  
      const ocean = await Ocean.findOne({ name: name });
      if (!ocean) {
        return res.status(404).send('Ocean not found');
      }
  
      const description = ocean.description;
      const surface_area = ocean.Surface_area;
      const Avg_Depth = ocean.Avg_Depth;
      const Max_Depth = ocean.Max_Depth;
      const Max_Depth_Location = ocean.Max_Depth_Location;
      const Avg_temperature = ocean.Avg_temperature;
      const species = ocean.species;
  
      res.render("oceans", {
        name,
        description: description,
        surface_area,
        Avg_Depth,
        Max_Depth,
        Max_Depth_Location,
        Avg_temperature,
        species,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving ocean data');
    }
  });

router.get("/:name/:specie", async (req, res) => {
    try {
        const name = req.params.name;
        const specieName = req.params.specie
    
        const ocean = await Ocean.findOne({ name: name });
        if (!ocean) {
          return res.status(404).send('Ocean not found');
        }

        const specie = ocean.species.find(specie => specie.Name === specieName)

        res.render("specie", {name: specie.Name, description: specie.description, Scientific_name: specie.Scientific_name, weight: specie.weight, length: specie.length, lifespan: specie.lifespan, threats: specie.threats, region: specie.region, population_status: specie.population_status, zinc_content: specie.zinc_content})

      } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving ocean data');
      }
})
  

module.exports = router;