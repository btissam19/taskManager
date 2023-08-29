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
        enum: ['completed', 'in_progress', 'cancelled'],  // This ensures only these values are allowed
        required: true
      }
});

module.exports = mongoose.model('transc', TranscSchema);
