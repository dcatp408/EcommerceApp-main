const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    userName: { 
    type: String, 
    required: [true, "Name is required"],
    minlength: [2, "Name must be at least 2 characters"]

},

email: { 
    type: String, 
    required: [true, "Email is required"]
   
    

},

password: { 
    type: String, 
    required: [true, "Password is required"],
    minlength: [8, "Name must be at least 8 characters"]

},

confirmPassword: { 
    type: String, 
    required: [true, "Password is required"],
    minlength: [8, "Name must be at least 8 characters"]

},



   
 

}, 
{ timestamps: true });
module.exports.User = mongoose.model('User', UserSchema);