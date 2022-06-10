const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const RejectedSchema = new mongoose.Schema({
  leader: {
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
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('Rejected',RejectedSchema)
