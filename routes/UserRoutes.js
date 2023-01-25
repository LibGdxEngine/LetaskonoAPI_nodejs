const express = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  timeSpan,
} = require("../controllers/UserController");
 
const router = express.Router();
 
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
router.route("/time").post(timeSpan);
 
module.exports = router;