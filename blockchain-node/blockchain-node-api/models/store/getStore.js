const StoreSchema = require('../schema/store');

const getStore = async (id) => {
    const store = await StoreSchema.findOne({id});
    return store;
}

module.exports = getStore