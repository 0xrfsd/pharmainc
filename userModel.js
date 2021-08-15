const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    gender: {
        type: String,
    },
    name: {
        type: Object,
    },
    location: {
        type: Object,
    },
    email: {
        type: String,
    },
    login: {
        type: Object,
    },
    dob: {
        type: Object,
    },
    registered: {
        type: Object,
    },
    phone: {
        type: String,
    },
    cell: {
        type: String,
    },
    id: {
        type: Object,
    },
    picture: {
        type: Object,
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
        enum: ["draft", "trash", "publicado"],
        default: "publicado"
    },
})

module.exports = mongoose.model("User", userSchema);