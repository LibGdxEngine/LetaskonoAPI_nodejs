const UserModel = require("../models/User");
 
exports.getAllUsers = async (limit, skip, gender) => {
  let query = {}
  if(gender === "ALL"){
    
  }else{
    query = {gender}
  }
  return await UserModel.find(query)
  .sort({createdAt: -1})
  .skip(skip)
  .limit(limit)
};
 
exports.getCountOfAllUsers = async () => {
  return await UserModel.count({isBlocked: false})
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

exports.getUserById = async (id) => {
  return await UserModel.findOne({ id: id });
};
 
exports.updateUser = async (phone, user) => {
  return await UserModel.findOneAndUpdate({phone: phone}, user);
};
 
exports.deleteUser = async (id) => {
  return await UserModel.findByIdAndDelete(id);
};