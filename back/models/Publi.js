const mongoose = require('mongoose');

const publiSchema = mongoose.Schema({
    userId: { type: String, required: true},
    description: { type: String, required: true},
    imageUrl: { type: String, required: true},
    date: { type: Number, required: true, default: Date.now},
    likes: { type: Number, required: true, default: 0},
    dislikes: { type: Number, required: true, default: 0},
    usersLikes: { type: Array, required: true, default:[]},
    usersDislikes: { type: Array, required: true, default:[]},
});

module.exports = mongoose.model("Publi", publiSchema);