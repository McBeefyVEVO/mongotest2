const mongoose = require("mongoose");

const productSchema = new mongoose.Schema ({

        productName: {type: String, required : true},
        productDescription: {type: String, required : false},
        productSaleState: {type: Boolean, required : true},
        productQuantity: {type: Number, required : true},



})

module.exports = mongoose.model("Product", productSchema)