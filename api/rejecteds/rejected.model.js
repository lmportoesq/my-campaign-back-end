const mongoose = require('mongoose');

const RejectedSchema = new mongoose.Schema({
  campaign: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Campaign'
  },
  follower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Follower'
  },
  docIdent: {
    type: Number,
    required: true,
    trim: true,
  },
  leaderRejected: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  leaderContainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('Rejected',RejectedSchema)
