const StoreSchema = require('../schema/store');

const deleteStore = async (id) => {
    await StoreSchema.findByIdAndDelete(id);
}

module.exports = deleteStore