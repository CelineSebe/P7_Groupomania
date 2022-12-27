const mongoose = require('mongoose');

const publiSchema = mongoose.Schema({
    userId: { type: String, required: true},
    imageUrlUser: { type: String, required: false},
    description: { type: String, required: true},
    imageUrl: { type: String, required: false},
    date: { type: Number, required: true, default: Date.now},
    likes: { type: Number, required: true, default: 0},
    usersLikes: { type: Array, required: true, default:[]},
});

module.exports = mongoose.model("Publi", publiSchema);