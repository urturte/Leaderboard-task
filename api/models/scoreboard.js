const mongoose = require("mongoose");

const scoreboardSchema = mongoose.Schema({
  name: { type: String, required: true, min: 3 },
  dateCreated: { type: Object, required: true },
  resultsIds: { type: Array },
  scoreDirection: { type: String },
});
module.exports = mongoose.model("Scoreboard", scoreboardSchema);
