const express = require("express");
const {
  registerAdmin,
  loginAdmin,
} = require("../controllers/adminController.js");

const { protect } = require("../middleware/adminAuthMiddleware");
const router = express.Router();

router.post("/", registerAdmin);
router.post("/login", loginAdmin);

module.exports = router;
