const userService = require("../services/UserService");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json({ data: users, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const phone = req.body["phone"];
    const otherUser = await userService.getUserByPhone(phone);
    if (otherUser == null) {
      const user = await userService.createUser(req.body);
      res.json({ data: user, status: "success" });
    } else {
      res.status(500).json({ error: "هذا الرقم مسجل لدينا بالفعل" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    let user = await userService.getUserByPhone(req.params.id);
    if (user == null) {
      user = await userService.getUserById(req.params.id);
    }
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getListOfUsers = async (req, res) => {
  try {
    const usersList = [];
    const userPhonesList = req.body["userPhonesList"];

    for (let i = 0; i < userPhonesList.length; i++) {
      let userId = userPhonesList[i];

      let user = await userService.getUserByPhone(userId);
      if (user == null) {
        user = await userService.getUserById(userId);
      }
      if (user != null) {
        usersList.push(user);
      }
    }

    res.json({ data: usersList, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.timeSpan = async (req, res) => {
  try {
    const phone = req.body["phone"];
    const user = await userService.getUserByPhone(phone);

    var d1 = user.acceptance.updatedAt;

    var diff = Date.now() - new Date(d1);

    var daydiff = diff / (1000 * 60 * 60 * 24);
    res.json({ timeSpan: daydiff, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
