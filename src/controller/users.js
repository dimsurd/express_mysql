const usersModels = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await usersModels.getAllUsers();

    res.json({
      message: "Get all users success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      serverMessage: error,
    });
  }
};

const createUsers = async (req, res) => {
  const { body } = req;

  if (!body.email || !body.name || !body.address) {
    return res.status(400).json({
      message: "Please fill all data properly",
    });
  }

  try {
    await usersModels.createUser(body);

    res.status(201).json({
      message: "Create new user success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { body } = req;
  const { id } = req.params;

  try {
    await usersModels.updateUser(body, id);

    res.status(201).json({
      message: "Update user success",
      data: {
        id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await usersModels.deleteUser(id);

    if (result[0].affectedRows === 0) {
      // No user found with the provided id
      res.status(404).json({
        message: "User not found",
      });
    } else {
      res.status(200).json({
        message: "Delete user success",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createUsers,
  updateUser,
  deleteUser,
};
