const {
  createRejected,
  getAllRejecteds,
  getRejectedById,
  getRejectedByFilter,
  updateRejected,
  deleteRejected,
} = require('./rejected.services');

async function handlerCreateRejected(req, res) {
  const newRejected = req.body;
  try {
    const rejected = await createRejected(newRejected);
    res.status(201).json(rejected);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function handlerGetAllRejecteds(req, res) {
  const filterConditions = req.query;
  if (Object.keys(filterConditions).length === 0) {
    const rejected = await getAllRejecteds();
    res.status(201).json(rejected);
  } else {
    const rejected = await getRejectedByFilter(filterConditions);
    res.status(201).json(rejected);
  }
}

async function handlerGetOneRejected(req, res) {
  const { id } = req.params;
  try {
    const rejected = await getRejectedById(id);
    res.status(201).json(rejected);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function handlerUpdateRejected(req, res) {
  const { id } = req.params;
  const newInfo=req.body;
  const rejected = await updateRejected(id,newInfo);

  if (!rejected) {
    return res.status(404);
  }

  return res.status(200).json(rejected);
}

async function handlerDeleteRejected(req, res) {
  const { id } = req.params;
  const rejected = await deleteRejected(id);

  if (!rejected) {
    return res.status(404);
  }

  return res.status(200).json({message:'Usuario fue eliminado...!'});
}

module.exports = {
  handlerCreateRejected,
  handlerGetAllRejecteds,
  handlerGetOneRejected,
  handlerUpdateRejected,
  handlerDeleteRejected,
};
