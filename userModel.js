const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    gender: {
        type: String,
        required: [true, 'Gender is required!']
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    dob: {
        type: String,
    },
    registered: {
        type: String,
    },
    phone: {
        type: Number,
        required: true
    },
    cell: {
        type: Number,
        required: true
    },
    id_: {
        type: String,
    },
    picture: {
        type: String,
        required: true
    },
    nat: {
        type: String,
    },
    imported_at: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        enum: ["draft", "trash", "publicado"]
    },
})

module.exports = mongoose.model("User", userSchema);