const UserModel = require("../models/User");
 
exports.getAllUsers = async () => {
  return await UserModel.find();
};
 
exports.createUser = async (user) => {
  return await UserModel.create(user);
};

exports.getUserById = async (id) => {
  return await UserModel.findById(id);
};

exports.getUserByPhone = async (phone) => {
  return await UserModel.findOne({ phone: phone });
};
 
exports.updateUser = async (phone, user) => {
  return await UserModel.findOneAndUpdate({phone: phone}, user);
};
 
exports.deleteUser = async (id) => {
  return await UserModel.findByIdAndDelete(id);
};