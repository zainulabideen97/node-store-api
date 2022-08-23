const mongoose = require('mongoose');

const AccountDetailType = new mongoose.Schema({
    detail_type_name: {
        type: String,
        maxlength: [100, 'can not be greater than 100 characters!!!'],
        required: [true, 'Detail Type Name can not be empty']
    },
    account_type: {
        type: String,
        maxlength: [100, 'can not be greater than 100 characters!!!'],
        required: [true, 'Account Type can not be empty']
    },
    basic_type: {
        type: String,
        maxlength: [20, 'can not be greater than 20 characters!!!'],
        required: [true, 'Basic Type can not be empty']
    },
    account_nature: {
        type: String,
        maxlength: [10, 'can not be greater than 10 characters!!!'],
        required: [true, 'Account Nature can not be empty']
    },
    description: {
        type: String,
        maxlength: [512, 'can not be greater than 512 characters!!!']
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


module.exports = mongoose.model('AccountDetailType', AccountDetailType);
