const bcrypt     =require('bcryptjs');
const Token = require('jsonwebtoken');

//generating the password
const generatePassword = function (newPwd, callback){
   bcrypt.genSalt (10, function (err, salt){
       if(err){
        throw err;
       }
    bcrypt.hash(newPwd , salt , callback)
   } );
}




// verifying the password

const verifyPassword = function (databasePwd , userPwd , callback){

    bcrypt.compare(databasePwd, userPwd, callback );
};



module.exports.verifyPassword = verifyPassword;  

module.exports.generatePassword = generatePassword;  