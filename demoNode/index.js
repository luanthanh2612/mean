const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const user = require('./routes/user.js');

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
app.use('/user',user);

app.get('/',(req,res)=>{
    res.render('gioithieu');
})


const port = 3000;
app.listen(port,()=>console.log(`Da ket noi vao server ${port}`));

