const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    pseudo: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    imageUrlUser: {type: String, required: false},
    role: {
        type: String,
        enum: ['utilisateur', 'administrateur'],
        default: 'utilisateur',
    },

});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);