const mongoose = require("mongoose");


//Connect to DB
mongoose.connect("mongodb://127.0.0.1:27017/blockchain-node-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((result) => {
        console.log("connected");
    })
    .catch((error) => {
        console.log(error.message);
    });

module.exports = (mongoose);