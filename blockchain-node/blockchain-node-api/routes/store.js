const updateStore = require("../models/store/updateStore")
const createStore = require("../models/store/createStore")
const StoreSchema = require("../models/schema/store")

const {Router} = require("express")
const getStores = require("../models/store/getStores")
const getStore = require("../models/store/getStore")
const router = Router();

// GET STORES
router.get('/', (req, res, next) => {
    const stores = getStores()
        .then(() => next({
            code: 200,
            data: { stores }
        }))
        .catch(err => {
            next({
                code: 400,
                errors: {error: err}
            });
        });
});

// GET STORE BY ID
router.get('/:id', (req, res,next) => {
    const {id} = req.params
    const store = getStore(id)
        .then(() => next({
            code: 200,
            data: { store }
        }))
        .catch(err => {
            next({
                code: 400,
                errors: {error: err}
            });
        });
});

// CREATE Store
router.post('/', (req, res, next) => {
    const {name} = req.body;
    const store = new StoreSchema({
        name
    });
    createStore(store)
        .then(() => next({
            code: 200
        }))
        .catch(err => {
            next({
                code: 400,
                errors: {error: err}
            });
        })
});

// UPDATE STORE
router.post('/:id', (req, res,next) => {
    const {id} = req.params
    updateStore(id)
        .then(() => next({
            code: 200
        }))
        .catch(err => {
            next({
                code: 400,
                errors: {error: err}
            });
        })
});

module.exports = router;

