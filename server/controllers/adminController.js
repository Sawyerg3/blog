const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Admin = require("../models/adminModel");
const asyncHandler = require("express-async-handler");

// @desc register  admin
// @route POST /api/admin
// @access public

const registerAdmin = async (req, res) => {
  try {
    const { userName, password } = req.body;

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const admin = await Admin.create({
      userName,
      password: hashedPassword,
    });

    if (admin) {
      res.status(200).json({
        success: true,
        message: "Admin registered",
        token: generateToken(admin._id),
      });
    } else {
      res.status(200).json({ success: false, message: "Invalid data" });
    }
  } catch (error) {
    console.log(error);
    res.status(200).json({ success: false, message: error.message });
  }
};

// @desc login admin
// @route POST /api/admin/login
// @access public
const loginAdmin = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const admin = await Admin.findOne({ userName });
    // check if admin exists nad compare passwords
    if (admin && (await bcrypt.compare(password, admin.password))) {
      res
        .status(200)
        .json({ success: true, admin: admin, token: generateToken(admin._id) });
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
};

// helper function to generates token on register or login
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_ADMIN_SECRET, {
    expiresIn: "6h",
  });
};

module.exports = { registerAdmin, loginAdmin };
