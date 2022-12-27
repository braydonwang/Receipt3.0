const ProductSchema = require('../schema/product');
const getProduct = async (sku) => {
    const product = await ProductSchema.findOne({ sku });
    return product;
}

module.exports = getProduct

// export default getProduct