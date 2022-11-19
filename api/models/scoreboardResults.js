const mongoose = require("mongoose");

const scoreboardResultsSchema = mongoose.Schema({
  scoreboardId: { type: String },
  points: { type: Number, required: true },
  title: { type: String, required: true, min: 3 },
});
module.exports = mongoose.model("Results", scoreboardResultsSchema);
