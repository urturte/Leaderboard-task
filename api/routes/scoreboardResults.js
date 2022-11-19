const express = require("express");
const router = express.Router();
const resultsController = require("../controllers/scoreboardResults");

router.post("/createScore", resultsController.CREATE_SCORE);

router.put("/editTitle/:id", resultsController.EDIT_TITLE);

router.get("/getAllResults", resultsController.GET_ALL_RESULTS);

router.get(
  "/getAllResultsByScoreboardId/:id",
  resultsController.GET_ALL_RESULTS_BY_SCOREBOARD_ID
);

module.exports = router;
