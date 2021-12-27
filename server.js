const express=require('express');
const bodyParser=require('body-parser');
const ejs = require('ejs');
const app=express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
const port=process.env.PORT||3000;
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/home.html");
});
app.listen(port,()=>{
    console.log(`server stared at port ${port}`);
})