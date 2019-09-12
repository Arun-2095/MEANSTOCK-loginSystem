const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt  = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const database = require('./database');

const User = mongoose.model('user');


const admin_Authentication = function (passport){
  
     let opts ={};

     opts.jwtFromRequest = ExtractJwt.  fromAuthHeaderWithScheme("jwt");
     opts.secretOrKey   = database.secret;

     passport.use(new JwtStrategy(opts, (jwtpayload, done)=>{
          console.log(jwtpayload.data._id);
     User.findById(jwtpayload.data._id, (err, user)=>{
          if(err){
               return done(err, false);
          }
          if(user){
          return done(null, user);
           } else {
          return done(null, false);
           }
     });           
     }
     ));

}

module.exports = admin_Authentication;

