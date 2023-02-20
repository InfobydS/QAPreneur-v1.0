const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    mobile: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },

    is_admin: {
        type: Number,
        required: true
    },

    is_verified: {
        type: Number,
        default: 0
    },

    image: {
        type: String,
        // required: true
    },

    Role_Id: {
        type: Number,
        required: true
    },

    Institute_Id: {
        type: Number,
        required: true
    },

    phoneOtp: String,

},

    { timestamps: true }

);


module.exports = mongoose.model('User', userSchema);