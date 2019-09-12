const express = require('express');
const routers = express.Router();

// Database
const config     = require('../config/database');

// Handling the mongodb data object

const mongoose   = require('mongoose');

//database model 

const Admin = require('../models/admin_model');

//password generation and Verification

const Password = require('../config/password');




//connecting database 

mongoose.connect(config.database , { useNewUrlParser: true } );

//checking database connection
mongoose.connection.on('connected',()=>{
    console.log('connected to database' + config.database);
} );


routers.post('/authentication' , (req,res)=>{ 
    const admin = req.body.admin;
    const password = req.body.password;

 Admin.getAdminByname(admin, (err,user)=>{
         if(err) throw err;
       if(!user){
           return res.json({success:false , msg :"userNotfound"});
       }
       if(user){

  Password.verifyPassword(password, user.password ,function(error, match){
    if(error){
      console.log(error);
    }

    if(match){
     return res.json({success:true , mgs : user });
    } else {
     return res.json({success: false , mgs : "password wrong" });
    } 
   });
       
        
       }
     });
  });
  


 routers.put('/update', function (req,res){

    const adminNew = req.body.adminNew;
    const newPassword = req.body.newPassword;
    
    const  admin =req.body.adminOld;
    const  password =req.body.oldPassword;
    
  Admin.getAdminByname(admin ,function(err, foundData){
      if(err){
        console.log(err);
      }
      if(foundData){
        
   Password.verifyPassword(password , foundData.password,function(error, match){
     
    
        if(match){
 
   Password.generatePassword(newPassword , function(err,hash) {
           if(err){
             console.log(err);
           }
 
           foundData.password = hash;
           foundData.admin = adminNew;
 
           foundData.save(function(err,updatedData){
                         if(err){
                           console.log(err);
                         }
                         if(updatedData){
                           res.send({updatedData});
                         }
                        });
                   
        });
 
    }else{
         
             res.send("wrong password");
          
     
       
        }
     
     
       });

              
       
      }else{
        res.send("user not found");
      }
    
      
    
    
    } );
    
    
    });
    
    module.exports = routers;