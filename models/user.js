const mongoose = require('mongoose');

const User = new mongoose.Schema({
    role_id: {
        type: String,
        required: [true, 'Role can not be null!'],
    },
    email: {
        type: String,
        required: [true, 'Email can not be null!'],
        unique: true,
        maxlength: [100, 'Email can not be greater than 100 characters!']
    },
    password: {
        type: String,
        required: [true, 'Password can not be null!'],
        maxlength: [100]
    },
    mobile: {
        type: String,
        maxlength: [20]
    },
    full_name: {
        type: String,
        maxlength: [128, 'name can not be greater than 128 characters!!!']
    },
    address: {
        type: String,
        maxlength: [1024]
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

module.exports = mongoose.model('User', User);
