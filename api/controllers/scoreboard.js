const ScoreboardSchema = require("../models/scoreboard");
// const ObjectId = require("mongoose").Types.ObjectId;

module.exports.CREATE_SCOREBOARD = function (req, res) {
  const scoreboard = new ScoreboardSchema({
    name: req.body.name,
    dateCreated: new Date(),
    resultsIds: [],
    scoreDirection: req.body.scoreDirection,
  });
  scoreboard.save().then((result) => {
    return res.status(200).json({ result: result });
  });
};
module.exports.EDIT_SCOREBOARD_NAME = function (req, res) {
  ScoreboardSchema.updateOne(
    { _id: req.params.id },
    { name: req.body.editedScoreboardName }
  ).then((result) => {
    return res.status(200).json({
      statusMessage: "Name edited successfully",
      editedScoreboardName: result,
    });
  });
};
module.exports.EDIT_SCOREBOARD_DIR = async function (req, res) {
  const direction = await ScoreboardSchema.findOne({
    _id: req.params.id,
  }).exec();
  console.log(direction.scoreDirection);

  function editDir(dir) {
    switch (dir) {
      case "Desc":
        dir = "Asc";
        break;
      case "Asc":
        dir = "Desc";
    }
    return dir;
  }

  ScoreboardSchema.updateOne(
    { _id: req.params.id },
    { scoreDirection: editDir(direction.scoreDirection) }
  ).then((result) => {
    return res.status(200).json({
      statusMessage: "Direction edited successfully",
      scoreDirection: result,
    });
  });
};
module.exports.GET_SCOREBOARDS = function (req, res) {
  ScoreboardSchema.find()
    .sort(" name")
    .then((result) => {
      return res.status(200).json({ scoreboards: result });
    });
};
module.exports.GET_SCOREBOARD_BY_ID = function (req, res) {
  ScoreboardSchema.findOne({ _id: req.params.id }).then((result) => {
    return res.status(200).json({ scoreboard: result });
  });
};
