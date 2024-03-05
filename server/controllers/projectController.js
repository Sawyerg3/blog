const Project = require("../models/projectModel");
const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv").config();
const AWS = require("aws-sdk");
const crypto = require("crypto");
const sharp = require("sharp");

const BUCKET_NAME = process.env.BUCKET_NAME;
const REGION = process.env.REGION;
const ACCESS_KEY = process.env.ACCESS_KEY;
const SECRET_KEY = process.env.SECRET_KEY;

const s3 = new AWS.S3({
  credentials: {
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
  },
  region: REGION,
});

const randomImageName = (bytes = 32) => {
  crypto.randomBytes(bytes).toString("hex");
};

/// @desc Creates new project
/// @route project /api/projects
/// @access private
const setProject = asyncHandler(async (req, res) => {
  // resize
  const buffer = await sharp(req.file.buffer).resize({
    width: 700,
    height: 500,
    fit: "contain",
  });

  // const imageName = randomImageName()
  const imageName = req.file.originalname;

  const params = {
    Bucket: BUCKET_NAME,
    Body: buffer,
    Key: imageName,
    ContentType: req.file.mimetype,
  };
  await s3.upload(params).promise();

  try {
    const project = await Project.create({
      title: req.body.title,
      description: req.body.description,
      image: imageName,
      url: req.body.url,
    });
    res.status(200).json({ success: true, message: "Success" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error uploading file to S3");
  }
});

// @desc Gets all projects
// @route GET /api/projects
// @access public
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find().sort({ createdAt: "desc" }).exec();

  for (const project of projects) {
    var params = { Bucket: BUCKET_NAME, Key: project.image };
    // set image to url
    project.image = s3.getSignedUrl("getObject", params);
  }

  res.status(200).json(projects);
});

/// @desc Delete project
/// @route DELETE /api/projects
/// @access private
const deleteProject = asyncHandler(async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    var params = { Bucket: BUCKET_NAME, Key: project.image };
    s3.deleteObject(params, function (err, data) {
      if (err) console.log(err, err.stack); // error
      else console.log(); // deleted
    });
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "removed" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = {
  setProject,
  getProjects,
  deleteProject,
};
