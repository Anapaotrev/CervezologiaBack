const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth');
const beers = require("../controllers/beers")

router.get("/beer", beers.getBeer)
router.get("/beers", beers.getBeers)
router.post("/beer", beers.newBeer)
router.patch("/beer", beers.updateBeer)
router.delete("/beer", beers.deleteBeer)

module.exports = router
