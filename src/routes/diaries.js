const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const diaries = require("../controllers/diaries");

router.get("/diary/:id", auth, diaries.getDiary);
router.get("/diaries", auth, diaries.getDiaries);
router.get("/my_diaries/", auth, diaries.getUserDiaries);
router.get("/diaries_by/:username", diaries.getUsernameDiaries);
router.post("/diary", auth, diaries.newDiary);
router.patch("/diary/:id", auth, diaries.updateDiary);
router.delete("/diary/:id", auth, diaries.deleteDiary);

module.exports = router;
