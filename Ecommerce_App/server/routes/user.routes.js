const UserController = require("../controllers/user.controllers")


module.exports = app => {
    app.get('/api', UserController.index);
    app.post('/api/user', UserController.createUser); //create
    app.get('/api/user', UserController.getAllUsers); //getall
    app.get('/api/user/:id', UserController.getUser); //getone
    app.put('/api/user/:id', UserController.updateUser); //update
    app.delete('/api/user/:id', UserController.deleteUser); //delete
}