const mongoose = require('mongoose');
//khai bao UserSchema
const userSchema = mongoose.Schema({
    username:{
        type: String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    diachi : {
        type : String,
        required : true
    }
});

const User = module.exports = mongoose.model('Person',userSchema);

module.exports.SaveUser = (newUser,callback)=>{
    if(!newUser.username == undefined || !newUser.age == undefined || !newUser.diachi == undefined){
            
    }  
    newUser.save(callback)
}
module.exports.getUser = (username,callback)=>{
    const query = {username : username};
    User.findOne(query,callback);
}
module.exports.getAllUser = (callback)=>{
   User.find({},callback);
}


