const catchAsyncErrors = require("./catchAsyncErrors");
const ErrorHandler = require("../utils/errorhandler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
exports.isAuthenticatedUser = catchAsyncErrors(async (re, res, next) => {
  const { token } = req.cookies;

  console.log(token);
  if (!token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData.id);
  next();
});
