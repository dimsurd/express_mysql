const express = require("express");
const {
  getAllUsers,
  createUsers,
  updateUser,
  deleteUser,
} = require("../controller/users");
const router = express.Router();

router.get("/", getAllUsers);

router.post("/", createUsers);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
