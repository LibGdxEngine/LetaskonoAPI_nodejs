const express = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  timeSpan,
  getListOfUsers
} = require("../controllers/UserController");
 
const router = express.Router();
 
router.route("/").post(getAllUsers).post(createUser)
router.route("/usersList").post(getListOfUsers);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
router.route("/time").post(timeSpan);
 
module.exports = router;