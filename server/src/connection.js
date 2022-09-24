const mongoose = require("mongoose");

const User = require("./User.model");

const connection = "mongodb://mongo:27017/mongo-test";


const connectDb = async () => {
  try {
    mongoose.set("useNewUrlParser", true);

    await mongoose.connect(connection);

    console.log("connected to database");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
