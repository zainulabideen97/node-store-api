const mongoose = require('mongoose');


const RolePermission = new mongoose.Schema({
    role_id: {
        type: String,
        required: [true, 'Role can not be null!'],
    },
    permission: {
        type: String,
        required: [true, 'Permission can not be null!'],
        maxlength: [100, 'Permission can not be greater than 100 characters!']
    },
    allow: {
        type: Boolean,
        required: [true, 'Allow permission to be null!'],
        default: true,
    },
    deny: {
        type: Boolean,
        required: [true, 'Deny permission to be null!'],
        default: false,
    },
});


module.exports = mongoose.model('RolePermission', RolePermission);
