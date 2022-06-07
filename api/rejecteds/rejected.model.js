const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const RejectedSchema = new mongoose.Schema({
  leaderRejected: {
    type: ObjectId,
    ref: 'Leaders'
  },
  leaderContainer: {
    type: ObjectId,
    ref: 'Leaders'
  },
  docIdent: {
    type: Number,
    required: true,
    trim: true,
  },
  Name: {
    type: String,
  },
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('Rejected',RejectedSchema)
