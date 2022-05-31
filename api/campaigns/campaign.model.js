const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  campaignType: {
    type: String,
    required: true,
  },
  candidateName: {
    type: String,
    required: true,
    uppercase: true,
  },
  campaignSlogan: {
    type: String,
    required: true,
  },
  campaignAdress: {
    type: String,
  },
  campaignLogo: {
    type: String,
  },
  campaignAdress: {
    type: String,
  },
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('Campaign', CampaignSchema);
