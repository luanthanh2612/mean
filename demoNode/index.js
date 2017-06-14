const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const user = require('./routes/user.js');
const nguoidung = require('./routes/nguoidung.js');

//conect mongoose

mongoose.connect('mongodb://localhost:27017/DBTest',(err)=>{
    if(err){
        console.log("Loi ket noi toi database");
    }else{
        console.log("ket noi toi database");
    }
});
mongoose.Promise = global.Promise;

//cors
app.use(cors());

//body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//View engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//set static
app.use(express.static(path.join(__dirname, 'public')));

//route
app.use('/nguoidung',nguoidung);
app.use('/user',user);
//home 
app.get('/',(req,res)=>{
    res.render('gioithieu');
})


const port = 3000;
app.listen(port,()=>console.log(`Da ket noi vao server ${port}`));

