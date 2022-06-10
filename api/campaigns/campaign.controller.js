const {
  createCampaign,
  getAllCampaigns,
  getCampaignById,
  updateCampaign,
  deleteCampaign,
} = require('./campaign.services');

async function handlerCreateCampaign(req, res) {
  const newCampaign = req.body;
  try {
    const campaign = await createCampaign(newCampaign);
    res.status(201).json(campaign);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function handlerGetAllCampaigns(req, res) {
  const filterConditions = req.query;
  if (Object.keys(filterConditions).length === 0) {
    const campaigns = await getAllCampaigns();
    res.status(201).json(campaigns);
  } else {
    res.status(201).json(campaigns);
  }
}

async function handlerGetOneCampaign(req, res) {
  const { id } = req.params;
  try {
    const campaign = await getCampaignById(id);
    res.status(201).json(campaign);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function handlerUpdateCampaign(req, res) {
  const { id } = req.params;
  const newInfo=req.body;
  const campaign = await updateCampaign(id,newInfo);

  if (!campaign) {
    return res.status(404);
  }

  return res.status(200).json(campaign);
}

async function handlerDeleteCampaign(req, res) {
  const { id } = req.params;
  const campaign = await deleteCampaign(id);

  if (!campaign) {
    return res.status(404);
  }

  return res.status(200).json({message:'Usuario fue eliminado...!'});
}

module.exports = {
  handlerCreateCampaign,
  handlerGetAllCampaigns,
  handlerGetOneCampaign,
  handlerUpdateCampaign,
  handlerDeleteCampaign,
};
