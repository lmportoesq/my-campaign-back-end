const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  campaignType: {
    type: String,
    required: true,
    unique: true,
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
  campaignLogo: {
    type: String,
  },
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('Campaign', CampaignSchema);
