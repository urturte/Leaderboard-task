const mongoose = require("mongoose");

const scoreboardSchema = mongoose.Schema({
  name: { type: String, required: true, min: 3 },
  dateCreated: { type: Object, required: true },
  resultsIds: { type: Array },
});
module.exports = mongoose.model("Scoreboard", scoreboardSchema);
