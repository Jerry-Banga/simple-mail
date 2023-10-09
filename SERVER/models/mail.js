const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MailSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    isRead: {
        type: Boolean,
        default: false
    },
    timestamp:{
        type: String,
        default: Date.now()
    }
});

const Mail = mongoose.model("mails", MailSchema);

module.exports = Mail;