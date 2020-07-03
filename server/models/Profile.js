const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    recentShow: {
      type: 'String',
      required: true,
      season: Number,
      episode: Number,
    },
    favoriteShow: String,
    bio: String,
    city: String,
    state: String,
    avatar: String,
  },
  { timestamps: {} }
);

module.exports = Profile = mongoose.model('profiles', profileSchema);
