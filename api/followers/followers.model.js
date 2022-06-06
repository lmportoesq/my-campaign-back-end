const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const FollowerSchema = new mongoose.Schema({
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
  firstName: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
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

module.exports = mongoose.model('Follower',FollowerSchema)
