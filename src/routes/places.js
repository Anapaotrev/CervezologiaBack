const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth');
const places = require("../controllers/places")

router.get("/place", places.getPlace)
router.get("/places", places.getPlaces)
router.post("/place", places.newPlace)
router.patch("/place", places.updatePlace)
router.delete("/place", places.deletePlace)

module.exports = router
