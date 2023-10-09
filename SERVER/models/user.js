const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    creationDate: {
        type: String,
        default: Date.now()
    }
});

const User = mongoose.model("users", UserSchema);

module.exports = User;