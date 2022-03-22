const {User} = require('../models/user.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

//create
module.exports.createUser = (request, response) => {
    const {    userName, 
       email, password, passwordConfirm} = request.body;
    User.create({
        userName, 
        email, password, passwordConfirm
    })
        .then(newUser => response.json(newUser)) //add validations
        .catch(err => response.status(400).json(err));
}

//get all
module.exports.getAllUsers = (request, response) => {
    User.find()
        .then(users => response.json(users))
        .catch(err => response.json(err))
}


//show one 
module.exports.getUser = (request, response) => {
    User.findOne({_id: request.params.id})
        .then(user => response.json(user))
        .catch(err => response.json(err))
}


//update
module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    
        .then(updatedUser => response.json(updatedUser))
        .catch(err => response.json(err))
}

//delete
module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}