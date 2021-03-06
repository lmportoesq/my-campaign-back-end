const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const LeaderSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: 'Users'
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
  leaderType: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('Leader',LeaderSchema)
