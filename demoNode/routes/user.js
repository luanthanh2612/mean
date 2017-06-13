const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/nguoidung');
const multer = require('multer');



const store = multer.diskStorage({
    destination : (req,file,cb) => cb(null,'./public/hinh'),
    filename : (req,file,cb) => cb(null,file.originalname)
});

const upload = multer({storage : store});

mongoose.connect('mongodb://localhost:27017/DBTest',(err)=>{
    if(err){
        console.log("Loi ket noi toi database");
    }else{
        console.log("ket noi toi database");
    }
});
mongoose.Promise = global.Promise;

router.post('/create',(req,res)=>{
    let newUser = new User({
        username : req.body.username,
        age : req.body.age,
        diachi : req.body.diachi
    });
  

    User.SaveUser(newUser,(err,user)=>{
        console.log(err);
        if(err){
            res.json({success : false, message : 'Fail!!!'});
        }else{
            res.json({success : true , message : 'Ok'});
        }
    });

});
router.get('/all',(req,res)=>{
    User.getAllUser((err,user)=>{
        if(err){
            res.json({success : false,message:'Fail!!!!'});
        }else{
            
            res.json({success : true, user});
        }
    });
});
router.get('/getUsername/:username',(req,res)=>{
    let username = req.params.username;
    User.getUser(username,(err,user)=>{
        if(err){
            console.log(err);
        }else{
            console.log(user);
            res.json({success : true , user : user});
        }
    });

});

const hinhShema = mongoose.Schema({
    tenhinh : {
        type : String
    }
});

const hinhModel = mongoose.model('hinh',hinhShema);

router.get('/upfile',(req,res)=>res.render('index'));
router.post('/upload',upload.single('file'),(req,res)=>{
        let hinh = new hinhModel({tenhinh : req.file.originalname});
        hinh.save((err,data)=>{
            if(err){
                console.log(err);
            }else{
               console.log(data);
            }
        })
});

router.get('/hinh',(req,res)=>{
    hinhModel.find((err,result)=>{
        if(err){
            res.json({success:false,message:'loi'});
        }else{
            res.json({success:true,hinh : result});
        }
    })
});

router.put('/update/:id',(req,res)=>{
    let newUser = {
        username:req.body.username,
        age : req.body.age,
        diachi : req.body.diachi
    }
    User.update({_id : req.params.id},newUser,(err,result)=>{
        if(err){
            res.json({success : false,message:'Failed'});
        }else{
            res.json({success : true, message:'thanh cong'});
        }
    });
});

router.delete('/delete/:id',(req,res)=>{
    User.remove({_id:req.params.id},(err)=>{
        if(err){
            res.json({success : false,message:'Loi'});
        }else{
            res.json({success : true,message:'delete thanh ong'});
        }
    });
});

module.exports = router;

