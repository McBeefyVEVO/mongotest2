const User = require("../models/users");




exports.getAllUsers = async (req, res) => {
    try {
        const data = await User.find().select("username")
        if(data){
            return res.status(200).send({
                msg: "Users found",
                data
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
exports.getUserById = async (req, res) => {
    try {
        const data = await User.findById(req.params.id)
        if(data){
            return res.status(200).send({
                msg: "User found",
                data
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
exports.createUser = async (req, res) => {
try {
    const data = new User({
        username: req.body.username,
        phone: req.body.phone,
        password: req.body.password
    });
    const result = await data.save();
    if (result){
    return res.status(201).send({
        "msg" : "User created",
        createdUser :{
            url: `http://localhost:3000/users/${result._id}`,
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
exports.updateUser = async (req, res) => {
    try {
        const data =  {
            username: req.body.username,
            phone: req.body.phone,
            password: req.body.password,
        };
        const result = await User.findByIdAndUpdate(req.params.id, data)
        if (result){
        return res.status(201).send({
            "msg" : "User updated",
            createdUser :{
                url: `http://localhost:3000/users/${result._id}`,
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
exports.patchUser = async (req, res) => {
    try {
        const update =  {
           
        }
        for(const ops of req.body){
        update[ops.propName] = ops.value;
        }
        const result = await User.findByIdAndUpdate(req.params.id, update)
        if (result){
        return res.status(201).send({
            "msg" : "User patched",
            createdUser :{
                url: `http://localhost:3000/users/${result._id}`,
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
exports.deleteUser = async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id)
        if(data){
            return res.status(200).send({
                msg: "Users deleted",
                data
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