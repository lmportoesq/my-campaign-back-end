const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const LeaderSchema = new mongoose.Schema({
  leader: {
    type: ObjectId,
    ref: 'Leaders'
  },
  docIdent: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },
  adress: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    trim: true,
  },
  votingTable: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('Leader',LeaderSchema)
