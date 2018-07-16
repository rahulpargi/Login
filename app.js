const express=require('express');
const app=express();
const path=require('path');


app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/login.html');

});

//Passport MiddleWare
// app.use(passport.initialize());
// app.use(passport.session);


app.listen(3000);