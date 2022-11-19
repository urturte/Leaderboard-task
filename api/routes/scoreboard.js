const express = require("express");
const router = express.Router();
const scoreboardController = require("../controllers/scoreboard");

router.post("/createScoreboard", scoreboardController.CREATE_SCOREBOARD);

router.put(
  "/editScoreboardName/:id",
  scoreboardController.EDIT_SCOREBOARD_NAME
);

router.get("/getAllScoreboards", scoreboardController.GET_SCOREBOARDS);

router.get(
  "/getAllScoreboardById/:id",
  scoreboardController.GET_SCOREBOARD_BY_ID
);

module.exports = router;
