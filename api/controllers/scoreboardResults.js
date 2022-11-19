const ScoreboardSchema = require("../models/scoreboard");
const ScoreboardResultsSchema = require("../models/scoreboardResults");

module.exports.CREATE_SCORE = function (req, res) {
  const score = new ScoreboardResultsSchema({
    scoreboardId: req.body.scoreboardId,
    points: req.body.points,
    title: req.body.title,
  });

  score.save().then((result) => {
    console.log(result);

    ScoreboardResultsSchema.updateOne(
      { _id: result._id },
      { id: result._id }
    ).exec();

    ScoreboardSchema.updateOne(
      { _id: req.body.scoreboardId },
      { $push: { resultsIds: result._id.toString() } }
    ).exec();

    return res.status(200).json({
      statusMessage: "Task added successfully",
      result: result,
    });
  });
};
module.exports.EDIT_TITLE = function (req, res) {
  ScoreboardResultsSchema.updateOne(
    { _id: req.params.id },
    { title: req.body.editedTitle }
  ).then((result) => {
    return res.status(200).json({
      statusMessage: "Title was edited successfully",
      editedTitle: result,
    });
  });
};
module.exports.GET_ALL_RESULTS = function (req, res) {
  ScoreboardResultsSchema.find()
    .sort({ points: -1 })
    .then((result) => {
      res.status(200).json({ allResults: result });
    });
};
module.exports.GET_ALL_RESULTS_BY_SCOREBOARD_ID = function (req, res) {
  ScoreboardResultsSchema.find({
    scoreboardId: req.params.id,
  })
    .sort({ points: -1 })
    .then((result) => {
      return res.status(200).json({ scoreboardResults: result });
    });
};
