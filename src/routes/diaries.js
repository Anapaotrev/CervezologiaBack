const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth');
const diaries = require("../controllers/diaries")


router.get("/diary/:id/:beer", auth, diaries.getDiary)
router.get("/diaries/:id", auth, diaries.getDiaries)
router.post("/diary/:id/:beer", auth, diaries.newBeer)
router.patch("/diary/:id/:beer", auth, diaries.updateBeer)
router.delete("/diary/:id/:beer", auth,  diaries.deleteBeer)

module.exports = router
