//const dotenv = require("dotenv");
// const mongoose = require("mongoose");

// const connectDatabase = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MOngo DB connection Success");
//   } catch (error) {
//     console.error("MONGO DB Conection FAIL");
//     process.exit(1);
//   }
// };

// module.exports = connectDatabase;
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("mongo Connect .....", process.env.MONGO_URI);
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    });
};
module.exports = connectDatabase;
