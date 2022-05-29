const Campaign = require('./campaign.model');

async function createCampaign(campaign) {
  const newCampaign = await Campaign.create(campaign);
  return newCampaign;
}

async function getAllCampaigns() {
  const campaigns = await Campaign.find({});
  return campaigns;
}

async function getCampaignById(id) {
  const campaign = await Campaign.findById(id);
  return campaign;
}

async function findOneCampaign(query) {
  const campaign = await Campaign.findOne(query);
  return campaign;
}

async function updateCampaign(id,newInfo) {
  const updatedCampaign = await Campaign.findByIdAndUpdate(id,newInfo,{ new: true });
  return updatedCampaign;
}

async function deleteCampaign(id) {
  const deletedCampaign = await Campaign.findByIdAndDelete(id);
  return deletedCampaign;
}

module.exports = {
  createCampaign,
  deleteCampaign,
  findOneCampaign,
  getAllCampaigns,
  getCampaignById,
  updateCampaign,
};
