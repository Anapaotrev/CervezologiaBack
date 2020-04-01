const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth');
const places = require("../controllers/places")

router.get("/place",auth, places.getPlace)
router.get("/places", auth, places.getPlaces)
router.post("/place", auth, places.newPlace)
router.patch("/place", auth, places.updatePlace)
router.detele("/place", auth, places.deletePlace)

module.exports = router
