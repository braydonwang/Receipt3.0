const ProductSchema = require('../schema/product');

const deleteProduct = async (sku) => {
    await ProductSchema.deleteOne({ sku });
}

module.exports = deleteProduct