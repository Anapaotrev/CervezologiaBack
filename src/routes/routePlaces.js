const express = require('express')
const router = express.Router()

const places = require("../controllers/places")

router.get("/place", beers.getPlace)
router.get("/places", beers.getPlaces)
router.post("/place", beers.newPlace)
router.patch("/place", beers.updatePlace)
router.detele("/place", beers.deletePlace)

module.exports = router
