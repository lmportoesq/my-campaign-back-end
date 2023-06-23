const Follower = require('./followers.model');

async function createFollower(follower) {
  const newFollower = await Follower.create(follower);
  return newFollower;
}

async function getAllFollowers() {
  const followers = await Follower.find({}).populate('leader');
  return followers;
}

async function getFollowerById(id) {
  const follower = await Follower.findById(id);
  return follower;
}

async function getFollowersByFilter(filterConditions) {
  const followersFiltered = await Follower.find( filterConditions ).populate('leader');

  if (!followersFiltered) {
    return null;
  }
  return followersFiltered;
}

async function findOneFollower(query) {
  const follower = await Follower.findOne(query);
  return follower;
}

async function updateFollower(id,newInfo) {
  const updatedFollower = await Follower.findByIdAndUpdate(id,newInfo,{ new: true });
  return updatedFollower;
}

async function deleteFollower(id) {
  const deletedFollower = await Follower.findByIdAndDelete(id);
  return deletedFollower;
}

module.exports = {
  createFollower,
  deleteFollower,
  findOneFollower,
  getAllFollowers,
  getFollowerById,
  getFollowersByFilter,
  updateFollower,
};
