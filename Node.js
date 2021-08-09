const express = require('express');
const bodyParser = require('bodyParser');
const fs = require ('fs');
const Node = express();
Node.use(bodyParser.urlencoded({
    extented : true
}))

Node.get('/',function(req,res){
    res.sendFile(__dirname+'./App.js');
});
Node.post('./submit',function(req,res){
    const userName=req.body.userName;
    const obj ={};
    const key = req.body.UserId;
    const newUser ={
        'name' : userName,
    }
    obj[key]=newUser;
    fs.readFile('users.json','utf8',function(err,data){
        data=JSON.parse(data);
        data[key]= obj[key];
        console.log(data)
        const upDateUser = JSON.stringify(data);
        fs.writeFile('users.json',upDateUser,function(err){
            res.end( JSON.stringify(data));
        })
    })
})
Node.listen(3003,function(){
    console.log('server is running on 3001');
})