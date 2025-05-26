const mongoose = require("mongoose");



const dataSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true },
    message: { type: String, required: true },
  },
  { minimize: false }
);


const dataModel = mongoose.models.user || mongoose.model("user", dataSchema);
module.exports = dataModel;
