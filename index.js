require('../myproject-main/backend/config/db');
var express = require('express');
var bodyparser=require('body-parser');
var apiroutes=require('../myproject-main/backend/routes/userRoutes');
var cors = require('cors');

var app = express();
app.use(express.static(__dirname+'/dist/myproject/index.html'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());

app.use('/',apiroutes);

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*'),
    // @ts-ignore
    res.setHeader('Access-Control-Allow-Credentials', true),
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT,DELETE,OPTIONS'),
    res.setHeader('Access-Control-Allow-Headers','Origin, Content-Type, Accept')
})


const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('Server is running at http://localhost:'+port);
});

