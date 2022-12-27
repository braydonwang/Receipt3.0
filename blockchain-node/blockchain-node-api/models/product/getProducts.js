const ProductSchema = require('../schema/product');

const getProducts = async (storeId) => {
    console.log(storeId);
    const products = await ProductSchema.find({ storeId });
    console.log(products);
    return products;
}

module.exports = getProducts