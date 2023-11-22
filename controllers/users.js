const User = require("../models/users");




exports.getAllUsers = async (req, res) => {
    try {
    
    } catch (error) {
        res.status(500).send({
            error
        })
    }
};
exports.getUserById = async (req, res) => {
    try {
    
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
    
    } catch (error) {
        res.status(500).send({
            error
        })
    }
};
exports.updateUser = async (req, res) => {
    try {
    
    } catch (error) {
        res.status(500).send({
            error
        })
    }
};
exports.patchUser = async (req, res) => {
    try {
    
    } catch (error) {
        res.status(500).send({
            error
        })
    }};
exports.deleteUser = async (req, res) => {
    try {
    
    } catch (error) {
        res.status(500).send({
            error
        })
    }};
   