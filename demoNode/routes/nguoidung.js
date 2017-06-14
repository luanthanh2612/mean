const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');

const nguoidungShema = mongoose.Schema({
        email: {
            type: String,
            required : true
        },
        password : {
            type : String,
            required : true
        },
        ten : {
            type : String
        }
});

const nguoidungModel = mongoose.model('nguoidung',nguoidungShema);


route.post('/dangky',(req,res)=>{
    let nguoidung = {
        email : req.body.email,
        password : req.body.password,
        ten : req.body.ten
    }
    const hiep = new nguoidungModel(nguoidung);
    hiep.save((err)=>{
        if(err){
            res.json({success : false,loinhan:'Save that bai'});
        }else{
            res.json({success : true,loinhan : 'Save thanh cong'});
        }
    });
});


module.exports = route