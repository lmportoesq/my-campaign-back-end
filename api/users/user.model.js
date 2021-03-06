const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const UserSchema = new mongoose.Schema({
  campaign:{
    type:ObjectId,
    ref:'Campaigns'
  },
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
    uppercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    default: '123',
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
  passwordResetToken: String,
  passwordResetExpires: Date,
}, {
  timestamps: true,
  versionKey: false,
});

UserSchema.pre('save', async function (next) {
  const user = this;
  try {
    if (!user.isModified('password')) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;

  return bcrypt.compare(candidatePassword, user.password);
};

UserSchema.virtual('profile').get(function () {
  const {
    firstName, lastName, role, email,
  } = this;

  return {
    fullName: `${firstName} ${lastName}`,
    role,
    email,
  };
});

module.exports = mongoose.model('User', UserSchema);
