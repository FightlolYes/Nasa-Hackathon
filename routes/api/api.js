const express = require("express")
const router = express.Router()
const Ocean = require("../../models/Ocean")

router.get("/", async (req, res) => {
    try {
        const ocean = await Ocean.find(); // Retrieve waypoints from MongoDB
        res.json(ocean); // Send the data as JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.get("/coordinates", async(req, res) => {
    try {
        const data = await Ocean.find({}, { name: 1, coordinates: 1, _id: 0 });

    // Send the filtered data as a JSON response
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router;