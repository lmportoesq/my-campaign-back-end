const {
  createLeader,
  getAllLeaders,
  getLeaderById,
  updateLeader,
} = require('./Leader.services');

async function handlerCreateLeader(req, res) {
  const newLeader = req.body;
  try {
    const leader = await createLeader(newLeader);
    res.status(201).json(leader);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function handlerGetAllLeaders(req, res) {
  const filterConditions = req.query;
  if (Object.keys(filterConditions).length === 0) {
    const leaders = await getAllLeaders();
    res.status(201).json(leaders);
  } else {
    res.status(201).json(leaders);
  }
}

async function handlerGetOneLeader(req, res) {
  const { id } = req.params;
  try {
    const leader = await getLeaderById(id);
    res.status(201).json(leader);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function handlerUpdateLeader(req, res) {
  const { id } = req.params;
  const newInfo=req.body;
  const leader = await updateLeader(id,newInfo);

  if (!leader) {
    return res.status(404);
  }

  return res.status(200).json(leader);
}

module.exports = {
  handlerCreateLeader,
  handlerGetAllLeaders,
  handlerGetOneLeader,
  handlerUpdateLeader,
};
