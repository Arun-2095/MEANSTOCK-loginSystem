const mongoose = require('mongoose');
const Password = require('../config/password');



const userSchema = mongoose.Schema({
   username:{
       type:String,
       trim:true,
       required:true
   },
   email:{
    type:  String,
   required : true,
   index: true,
   unique: true 
  },
  phone:{
    type:  Number,
  required : true,
}, password:{
    type:  String,
  required : true,
  minlength:3
},
   

});


const User = mongoose.model('user' , userSchema ,'userDetails');

// Registrating user

const addUser = function (user, callback){
const pwd =user.password;
Password.generatePassword(pwd, callback);

}





module.exports = User;
// module.exports.addUser= addUser;