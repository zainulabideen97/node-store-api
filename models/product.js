const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name should be valid!']
    },
    price: {
        type: Number,
        required: [true, 'Product price should be valid!']
    },
    featured: {
        type: Boolean,
        defalut: false
    },
    rating: {
        type: Number,
        default: 5.0
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported!'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model('Product', ProductSchema);
