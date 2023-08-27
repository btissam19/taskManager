const mongoose = require('mongoose');

const TranscSchema = new mongoose.Schema({
    project: {
        type: String, 
        required: true
    },
    developer: {  
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    status: {
        type: String,  
        required: true
    }
});

module.exports = mongoose.model('transc', TranscSchema);
