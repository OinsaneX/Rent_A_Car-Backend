const { Router } = require("express");
const router = Router();
const {
  getUsers,
  getUserById,
  getUserByNameAndPass,
  updateUser,
  deleteUser,
  createUser,
  convertToDriver,
  confirmAccount,
} = require("../controllers/User");

router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

router.route("/login").post(getUserByNameAndPass);

router.route("/convertToDriver/:id").put(convertToDriver);

router.route("/confirmAccount/:id").get(confirmAccount);

module.exports = router;
