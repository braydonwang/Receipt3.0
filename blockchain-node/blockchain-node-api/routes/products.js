
const express = require('express');
const getProduct = require('../models/product/getProduct');
const getProducts = require('../models/product/getProducts');
const deleteProduct = require('../models/product/deleteProduct');
const createProduct = require('../models/product/createProduct');
const updateProduct = require('../models/product/updateProduct')

const router = express.Router();

// GET PRODUCTS
router.get('/store/:id', async (req, res, next) => {
    const { id } = req.params;
    // console.log(req.body);

    try {
        const products = await getProducts(id)
        next({
            code: 200,
            data: { products }
        })
    } catch (err) {
        next({
            code: 400,
            errors: {error: err}
        });
    }
    // const products = await 
    // .then(() => {
        
    // })
    // .catch(err => {
        
    // });
});

// GET PRODUCT BY ID
router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    const product = getProduct(id)
    .then(() => next({
        code: 200,
        data: { product }
    }))
    .catch(err => {
        next({
            code: 400,
            errors: {error: err}
        });
    });
});

// CREATE PRODUCT
router.post('/', (req, res, next) => {
    const { sku, productName, price, refundable, storeId } = req.body;

    createProduct(sku, productName, price, refundable, storeId)
    .then(() => next({
        code: 200,
    }))
    .catch(err => {
        next({
            code: 400,
            errors: {error: err}
        });
    });
});

// UPDATE PRODUCT
router.post('/:id', (req, res, next) => {
    const { sku, product_name, price, refundable } = req.body;

    updateProduct(sku, product_name, price, refundable)
    .then(() => next({
        code: 200,
    }))
    .catch(err => {
        next({
            code: 400,
            errors: {error: err}
        });
    });
});

// DELETE PRODUCT
router.post('/delete', (req, res, next) => {
    const {sku} = req.params;

    deleteProduct(sku)
    .then(() => next({
        code: 200,
    }))
    .catch(err => {
        next({
            code: 400,
            errors: {error: err}
        });
    });
});

module.exports = router;

