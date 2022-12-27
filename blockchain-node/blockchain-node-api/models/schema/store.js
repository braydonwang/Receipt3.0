const mongoose = require('../../config/mongoose')
const ProductSchema = require('./product')

const StoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("store", StoreSchema)
