const router = require("express").Router();
const { asyncHandler } = require("../middlewares/asyncHandler");
const checkEmail = require("../middlewares/checkEmail");
const {
  signUp: signupValidator,
  signin: signinValidator,
} = require("../validators/auth");
const authController = require("../controllers/auth.controller");

router
  .route("/signUp")
  .post(
    signupValidator,
    asyncHandler(checkEmail),
    asyncHandler(authController.signUp)
  );

router
  .route("/signin")
  .post(signinValidator, asyncHandler(authController.signin));

module.exports = router;
