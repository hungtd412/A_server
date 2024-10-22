const mongoose = require("mongoose");

// const uri = "mongod://localhost:27017/course-api-data";
const uri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/course-api-data";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

module.exports = mongoose;
