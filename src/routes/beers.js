const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth');
const beers = require("../controllers/beers")

router.get("/beer", auth, beers.getBeer)
router.get("/beers", auth, beers.getBeers)
router.post("/beer", auth, beers.newBeer)
router.patch("/beer", auth, beers.updateBeer)
router.detele("/beer", auth, beers.deleteBeer)

module.exports = router
