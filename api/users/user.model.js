const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
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
    password: {
      type: String,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: 'user',
      enum: ['owner', 'admin', 'user'],
      required: true,
    },
  }, {
    timestamps: true,
    versionKey: false,
  });
  module.exports = mongoose.model('User', UserSchema);
  