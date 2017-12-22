const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    verify: {
        type: Boolean,
        default: false
    },
    isOnline: {
        type: Boolean,
        default: false
    },
    lastMessage: {
        type: String,
        default: ''
    }

});

mongoose.model('users', UserSchema);