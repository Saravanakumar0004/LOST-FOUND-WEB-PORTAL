const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User',
    // },
     name:{
        type: String,
        required: [true, 'Please add a name value']
    },email:{
        type: String,
        required: [true, 'Please add an email value'],
    },department:{
        type: String,
        required: [true, 'Please add a department value']
    },
    subject: {
        type: String,
        required: [true, 'Please add a text value']
    },
    description: {
        type: String,
        required: [true, 'Please add a description value']
    },  
    }, {
        timestamps: true
    }
);  

module.exports = mongoose.model('request', goalSchema);