const express = require('express');
const routers = express.Router();
//database connection 
const config     = require('../config/database');
// Handling the mongodb data object
const mongoose   = require('mongoose');
//database model 
const User = require('../models/user_model');
//password generation and Verification
const Password = require('../config/password');
// token Generation
const Token = require('jsonwebtoken');
// token verification 
const Passport = require('passport');

//connecting database 

mongoose.connect(config.database , { useNewUrlParser: true } );

//checking database connection
mongoose.connection.on('connected',()=>{
    console.log('connected to database' + config.database);
} );




// Registrating the user to DataBase

routers.post('/registration', (req, res)=>{
  
    if(req.body.confirmPassword === req.body.password ){
        const user = new User({
            username:req.body.username,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password,
            
        });
    
    
        Password.generatePassword(user.password , function (err, hash){
            if(err){
                throw err;
            }
            user.password = hash;
    
            user.save(function(err,user){
                if(err){
                    
                    res.json({success:false , mgs:"user not Registered" , err : err.message });
                }
                if(user){
                  res.json({success:true , mgs:"user Registered successfuly" });
                }
            })
        });

    } else {

        res.json({success:false , mgs:"Password Donot Match" });
    }
   
   

  

});

// login Authentication 

routers.post('/loginauthentication', (req, res ,next )=>{ 
    
    const email= req.body.email;
    const password = req.body.password;

  User.findOne({email : email}, function(err, data){
      if(err){
        res.json(err);
      }

      if(data) {
          const databasepwd =data.password;
        
     Password.verifyPassword(password, databasepwd, function(error,match){
           if(error){
               throw error;
           }
           if(match){
          const token = Token.sign( {data:data}, config.secret , {
              expiresIn: 604800
          })  
          return res.json({
              mgs :"success",
              token : 'JWT ' + token,
              user : {
                username : data.username,
                password : data.password,
                phone    : data.phone,
                email    : data.email
              }
              
        });

           }else {
            return res.json({mgs :"password is wrong"});
           } 

          })
        
      }else {
        return res.json({mgs :"Mail Id is Not Registered"});
       } 
     
    
    });
  


}); 


// protecting userProfil with token
                        
routers.get('/profile', Passport.authenticate('jwt' , {session:false}) , (req, res ,next )=>{ 
    
    
    console.log('apidata' + req.user);
    
    res.json(req.user);
    
}); 




module.exports = routers;
