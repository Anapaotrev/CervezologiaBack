const express = require('express')
const router = express.Router()

const beers = require("../controllers/beers")

router.get("/beer", beers.getBeer)
router.get("/beers", beers.getBeers)
router.post("/beer", beers.newBeer)
router.patch("/beer", beers.updateBeer)
router.detele("/beer", beers.deleteBeer)

module.exports = router
