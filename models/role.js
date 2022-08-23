const mongoose = require('mongoose');


const Role = new mongoose.Schema({
    role_name: {
        type: String,
        maxlength: [50, 'Name can not be greater than 50 characters!'],
        required: [true, 'Name should be valid!']
    },
    is_active: {
        type: Boolean,
        required: [true],
        default: true
    },
    date_added: {
        type: Date,
        required: [true],
        default: Date.now()
    },
    date_updated: {
        type: Date,
        required: [true],
        default: Date.now()
    }
});

module.exports = mongoose.model('Role', Role);
