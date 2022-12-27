const ProductSchema = require('../schema/product');

const updateProduct = async (sku, price, product_name, refundable) => {
    await ProductSchema.updateOne({sku}, {price, product_name, refundable})
}

module.exports = updateProduct