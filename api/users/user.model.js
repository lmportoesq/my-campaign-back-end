const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  campaign: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Campaign'
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
    default: 'leader',
    enum: ['owner', 'admin', 'leader'],
    required: true,
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
      console.log('No modifica password...')
      next();
    }
    console.log('Modifica password...')
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
    firstName, lastName, role, email, campaign
  } = this;

  return {
    fullName: `${firstName} ${lastName}`,
    role,
    email,
    campaign_id: `${campaign._id}`,
    campaignType: `${campaign.campaignType}`,
    candidateName: `${campaign.candidateName}`,
    campaignSlogan: `${campaign.campaignSlogan}`
  };
});

module.exports = mongoose.model('User', UserSchema);
