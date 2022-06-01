const Leader = require('./leader.model');

async function createLeader(leader) {
  const newLeader = await Leader.create(leader);
  return newLeader;
}

async function getAllLeaders() {
  const leaders = await Leader.find({});
  return leaders;
}

async function getLeaderById(id) {
  const leader = await Leader.findById(id);
  return leader;
}

async function findOneLeader(query) {
  const leader = await Leader.findOne(query);
  return leader;
}

async function updateLeader(id,newInfo) {
  const updatedLeader = await Leader.findByIdAndUpdate(id,newInfo,{ new: true });
  return updatedLeader;
}

module.exports = {
  createLeader,
  findOneLeader,
  getAllLeaders,
  getLeaderById,
  updateLeader,
};
