const Rejected = require('./rejected.model');

async function createRejected(rejected) {
  const flagValidate = await validateRejected(rejected);

  if (flagValidate) {
    const newRejected = await Rejected.create(rejected);
    return newRejected;
  }

  return null
}

async function getAllRejecteds() {
  const rejecteds = await Rejected.find({})
    .populate({
      path: 'follower',
      select: 'campaign docIdent firstName lastName',
      populate: {
        path: 'leader',
        select: 'firstName lastName docIdent'
      }
    })
    .populate({
      path: 'leaderRejected',
      select: 'firstName lastName docIdent'
    });
  return rejecteds;
}

async function validateRejected(data) {
  const rejected = await Rejected.findOne()
    .where('follower').equals(data.follower)
    .where('leaderRejected').equals(data.leaderRejected)

  if (rejected) {
    return false
  } else {
    return true
  }
}

async function getRejectedById(id) {
  const rejected = await Rejected.findById(id);
  return rejected;
}

async function getRejectedByFilter(filterConditions) {
  const rejectedFiltered = await Rejected.find(filterConditions)
    .populate({
      path: 'follower',
      select: 'campaign docIdent firstName lastName',
      populate: {
        path: 'leader',
        select: 'firstName lastName docIdent'
      }
    })
    .populate({
      path: 'leaderRejected',
      select: 'firstName lastName docIdent'
    });

  if (!rejectedFiltered) {
    return null;
  }
  return rejectedFiltered;
}

async function findOneRejected(query) {
  const rejected = await Rejected.findOne(query);
  return rejected;
}

async function updateRejected(id, newInfo) {
  const updatedRejected = await Rejected.findByIdAndUpdate(id, newInfo, { new: true });
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
  getRejectedByFilter,
  updateRejected,
  validateRejected
};
