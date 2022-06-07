const Rejected = require('./rejected.model');

async function createRejected(rejected) {
  const newRejected = await Rejected.create(rejected);
  return newRejected;
}

async function getAllRejecteds() {
  const rejecteds = await Rejected.find({});
  return rejecteds;
}

async function getRejectedById(id) {
  const rejected = await Rejected.findById(id);
  return rejected;
}

async function findOneRejected(query) {
  const rejected = await Rejected.findOne(query);
  return rejected;
}

async function updateRejected(id,newInfo) {
  const updatedRejected = await Rejected.findByIdAndUpdate(id,newInfo,{ new: true });
  return updatedRejected;
}

async function deleteRejected(id) {
  const deletedRejected = await Rejected.findByIdAndDelete(id);
  return deletedRejected;
}

module.exports = {
  createRejected,
  deleteRejected,
  findOneRejected,
  getAllRejecteds,
  getRejectedById,
  updateRejected,
};
