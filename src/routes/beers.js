const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth');
const beers = require("../controllers/beers")

router.get("/beer/:id", beers.getBeer)
router.get("/beers", beers.getBeers)
router.get("/beers/distinct", beers.getDistinct)
router.post("/beer/:id", beers.newBeer)
router.patch("/beer/:id", beers.updateBeer)
router.delete("/beer/:id", beers.deleteBeer)

module.exports = router
