const { createRejected } = require('../rejecteds/rejected.services');
const {
  createFollower,
  getAllFollowers,
  getFollowerById,
  getFollowersByFilter,
  updateFollower,
  deleteFollower,
  getFollowerByDocIdent
} = require('./followers.services');

async function handlerCreateFollower(req, res) {
  const newFollower = req.body;
  try {
    const follower = await createFollower(newFollower);
    res.status(201).json(follower);
  } catch (error) {

    if (error.code == 11000) {
      const oldFollower = await getFollowerByDocIdent(error.keyValue.docIdent);
      console.log(oldFollower);
      await createRejected({follower: oldFollower._id.toString(), leaderRejected: newFollower.leader})
      res.status(500).json({...error, oldFollower: oldFollower});
    } else {
      res.status(500).json(error);
    }
  }
}

async function handlerGetAllFollowers(req, res) {
  const filterConditions = req.query;

  if (Object.keys(filterConditions).length === 0) {
    const follower = await getAllFollowers();
    res.status(201).json(follower);
  } else {
    const follower = await getFollowersByFilter(filterConditions);
    res.status(201).json(follower);
  }
}

async function handlerGetOneFollower(req, res) {
  const { id } = req.params;
  try {
    const follower = await getFollowerById(id);
    res.status(201).json(follower);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function handlerUpdateFollower(req, res) {
  const { id } = req.params;
  const newInfo = req.body;
  const follower = await updateFollower(id, newInfo);

  if (!follower) {
    return res.status(404);
  }

  return res.status(200).json(follower);
}

async function handlerDeleteFollower(req, res) {
  const { id } = req.params;
  const follower = await deleteFollower(id);

  if (!follower) {
    return res.status(404);
  }

  return res.status(200).json({ message: 'Usuario fue eliminado...!' });
}

module.exports = {
  handlerCreateFollower,
  handlerGetAllFollowers,
  handlerGetOneFollower,
  handlerUpdateFollower,
  handlerDeleteFollower,
};
