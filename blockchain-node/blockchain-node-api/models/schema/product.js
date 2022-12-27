const mongoose = require('../../config/mongoose')

const ProductSchema = new mongoose.Schema({
    sku: {
        type: String,
        require: true
    },
    productName: {
        type: String,
        require: true
    },
    storeId: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    refundable: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("product", ProductSchema)