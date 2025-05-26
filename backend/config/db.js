const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://leadgeneration:lead3232@cluster0.dhncby5.mongodb.net/leadgenraion"
    )
    .then(() => console.log("DB connected"));
};
module.exports = connectDB;
