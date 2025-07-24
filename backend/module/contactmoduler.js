const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name value']
    },
    email: {
        type: String,
        required: [true, 'Please add an email value'],
    },
    mobileNumber: {
        type: String,
        required: [true, 'Please add a department value']
    },
    message: {
        type: String,
        required: [true, 'Please add a description value']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('contact', contactSchema);