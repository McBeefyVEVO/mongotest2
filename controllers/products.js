const Product = require("../models/products")

exports.getAllProducts = async (req, res) =>{
    try {
        const data = await Product.find().select("productName")       
        if (data){
            return res.status(200).send({
                msg: "Products found",
                data

            })
        } 
        res.status(500).send({
            "msg" : "Error :c"
        })
    } catch (error) {
        res.status(500).send(
            {
                error
            }
        )        
    }
}


exports.getProductById = async (req, res) =>{
    try {
        const data = await Product.findById(req.params.id)       
        if (data){
            return res.status(200).send({
                msg: "Product found",
                data

            })
        } 
        res.status(500).send({
            "msg" : "Error :c"
        })
    } catch (error) {
        res.status(500).send(
            {
                error
            }
        )        
    }
}


exports.createProduct = async (req, res) =>{
    try {
        const data = new Product({
            productName: req.body.productName,
            productDescription: req.body.productDescription,
            productSaleState: req.body.productSaleState,
            productQuantity: req.body.productQuantity
        });
        const result = await data.save();
        if (result){
            return res.status(201).send({
                msg: "Product created",
                createdProduct : {
                    url: `http://localhost:3000/products/${result._id}`,
                    result,
                }

            })
        } 
        res.status(500).send({
            "msg" : "Error :c"
        })
    } catch (error) {
        res.status(500).send(
            {
                error
            }
        )        
    }
}


exports.updateProduct = async (req, res) =>{
    try {
        const data = ({
            productName: req.body.productName,
            productDescription: req.body.productDescription,
            productSaleState: req.body.productSaleState,
            productQuantity: req.body.productQuantity
        });
        const result = await Product.findByIdAndUpdate(req.params.id, data);
        if (result){
            return res.status(201).send({
                msg: "Product updated",
                createdProduct : {
                    url: `http://localhost:3000/products/${result._id}`,
                    result,
                }

            })
        } 
        res.status(500).send({
            "msg" : "Error :c"
        })
    } catch (error) {
        res.status(500).send(
            {
                error
            }
        )        
    }
}

exports.patchProduct = async (req, res) => {
    try {
        const update =  {
           
        }
        for(const ops of req.body){
        update[ops.propName] = ops.value;
        }
        const result = await Product.findByIdAndUpdate(req.params.id, update)
        if (result){
        return res.status(201).send({
            "msg" : "Product patched",
            createdProduct :{
                url: `http://localhost:3000/products/${result._id}`,
                result,
            }
        })
        }
        res.status(500).send({
            "msg" : "Error :c"
        })
    } catch (error) {
        res.status(500).send({
            error
        })
    }
    };

exports.deleteProduct = async (req, res) => {
    try {

        const data = await Product.findByIdAndDelete(req.params.id)
        if(data){
            return res.status(200).send({
                msg: "Product deleted",
                data
            })
        }
        res.status(500).send({
            msg : "Error :c"
        })
    }
    catch (error) {
        res.status(500).send({
            error
        })
    }




}