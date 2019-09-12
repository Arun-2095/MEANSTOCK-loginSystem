const mongoose = require('mongoose');



// admin Schema 

const AdminSchema = mongoose.Schema({
     username : {
      type:  String,
      required : true
    },
    password : {
        type:  String
     }
});

const Admin = mongoose.model('admin' , AdminSchema ,'admin');

const getAdminByname = function (admin , callback){
    const query = {admin:admin};
    Admin.findOne(query,callback);
}


module.exports.getAdminByname = getAdminByname;