const app = require("./app");
require("dotenv").config();
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

//Handlling uncahgt exception

process.on("uncaughtException", (err) => {
  console.log(`Error :${err.message}`);
  console.log("Shutting Dwon the server due to uncahgt exception");
  process.exit(1);
});
//config

// dotenv.config({ path: "backend/config/config.env" });

//conecting database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARI_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});

//Unhandled Promise Rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("ShuttingDown the server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
