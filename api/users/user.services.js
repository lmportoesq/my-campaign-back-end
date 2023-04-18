const User = require('./user.model');

async function createUser(user) {
  const newUser = await User.create(user);
  return newUser;
}

async function getAllUsers() {
  const users = await User.find({});
  return users;
}

async function getUserById(id) {
  const user = await User.findById(id);
  return user;
}

async function findOneUser(query) {
  const user = await User.findOne(query).populate('campaign');
  return user;
}

async function getUserByEmail(email) {
  const user = await User.findOne({ email }).populate('campaign');
  return user;
}

async function updateUser(id,newInfo) {
  const updatedUser = await User.findByIdAndUpdate(id,newInfo,{ new: true });
  return updatedUser;
}

async function deleteUser(id) {
  const deletedUser = await User.findByIdAndDelete(id);
  return deletedUser;
}

module.exports = {
  createUser,
  deleteUser,
  findOneUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  updateUser,
};
