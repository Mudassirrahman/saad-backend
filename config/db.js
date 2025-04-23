require("dotenv").config();
const mongoose = require("mongoose");

const connectToDB = async () => {
  await mongoose
    .connect(process.env.DB_PASSWORD)
    .then(() => console.log("DB CONNECTED"));
};

module.exports = connectToDB;
