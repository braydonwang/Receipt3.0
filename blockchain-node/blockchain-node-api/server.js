const express = require('express');
const app = express();
const cors = require('cors');
const Web3 = require('web3');
const contract = require('@truffle/contract');

const productRouter = require('./routes/products')
const storeRouter = require('./routes/store')
const {responseHandler} = require('./middleware/responseHandler')

const mintNFT = require('./mint')
app.use(cors());
app.use(express.json());

// if (typeof web3 !== 'undefined') {
//         var web3 = new Web3(web3.currentProvider); 
// } else {
//         var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
// }

app.get('/', async (req, res) => {
        await mintNFT();
})

app.use("/product", productRouter);
app.use("/store", storeRouter)
app.use(responseHandler);
app.listen(process.env.PORT || 3001, () => {
        console.log('listening on port '+ (process.env.PORT || 3001));
});