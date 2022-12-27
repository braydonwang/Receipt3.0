const StoreSchema = require('../schema/store');

const updateStore = async (id, name) => {
    await StoreSchema.updateOne({id}, {name})
}

module.exports = updateStore
