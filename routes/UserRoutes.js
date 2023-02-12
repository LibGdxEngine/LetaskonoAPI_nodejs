const express = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  timeSpan,
  getListOfUsers,
  getUsersForAdmin
} = require("../controllers/UserController");
 
const router = express.Router();
 
router.route("/").post(createUser)
router.route("/allusers").post(getAllUsers)
router.route("/usersForAdmin/:id").get(getUsersForAdmin)
router.route("/usersList").post(getListOfUsers);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
router.route("/time").post(timeSpan);

 
module.exports = router;