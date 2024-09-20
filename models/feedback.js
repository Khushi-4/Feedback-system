const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,  // Capital "S" for String
        required: true
    },
    contactNumber: {
        type: String,  // Capital "S"
        required: true
    },
    email: {
        type: String,  // Capital "S"
        required: true
    },
    feedback: {
        type: String,  // Capital "S"
        required: true
    }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
