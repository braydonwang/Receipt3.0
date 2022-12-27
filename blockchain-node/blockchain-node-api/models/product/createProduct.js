const ProductSchema = require('../schema/product');

const createProduct = async (sku, productName, price, refundable, storeId) => {
    await ProductSchema.create({ sku, productName, price, refundable, storeId });
}

module.exports = createProduct


