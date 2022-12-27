const StoreSchema = require('../schema/store');

const getStores = async () => {
    const stores = await StoreSchema.find();
    return stores;
}

module.exports = getStores