const express = require("express");
const router = express.Router();
const {
  getProjects,
  setProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const multer = require("multer");
const { protect } = require("../middleware/adminAuthMiddleware");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router
  .route("/")
  .get(getProjects)
  .post(protect, upload.single("image"), setProject);
router.route("/:id").delete(protect, deleteProject);
// router.route('/:id').delete(protect, deleteProject).put(protect, updateProject)

module.exports = router;
